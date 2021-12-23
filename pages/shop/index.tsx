import CollectionCardDimmer from '@components/Collection/CollectionCardDimmer';
import Layout from '@components/Shared/Layout';
import Pagination from '@components/Shared/Pagination';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, HomeIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline';
import usePagination from '@hooks/usePagination';
import { blurredBgProduct } from '@public/images/bg-base-64';
import { useShopFilterContext } from '@store/ShopFilterContext';
import { internalPages } from '@utils/config';
import { defaultFilters, fetchAssetList } from '@utils/shop/helpers';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Tween } from 'react-gsap';

export const Shop = ({ initialFilters, assetsList, searchText = '' }): JSX.Element => {
  const [currentFilters, setCurrentFilters] = useState({ ...defaultFilters, ...initialFilters });

  const { currentRenderList, buttons, isFetching } = usePagination(
    {
      url: '/v1/assets/search',
      method: 'POST',
      payload: {
        filters: { ...currentFilters },
        searchText: searchText,
        projectId: 'randomText',
        sort: 'createdAt',
        wildcard: false,
      },
    },
    assetsList?.list,
    assetsList?.count,
    internalPages?.Shop?.NUM_OF_BUTTONS,
    internalPages?.Shop?.DEFAULT_PAGE_SIZE,
    'hits'
  );
  const {
    filters: { retailer: retailerList = [], subCategory, vertical },
    updateFilter,
  } = useShopFilterContext();
  const router = useRouter();

  const lastQueryItems = React.useRef(Object.keys(router?.query));

  const verticalList = useMemo(() => {
    const selectedSubCategories = subCategory?.filter((item) => item?.selected);
    if (selectedSubCategories?.length) {
      return vertical?.filter(
        (item) => item?.subcategory === selectedSubCategories[selectedSubCategories?.length - 1]?._id
      );
    } else {
      return [];
    }
  }, [subCategory, vertical]);

  useEffect(() => {
    const queryItems = Object.keys(router?.query);

    if (queryItems?.length) {
      lastQueryItems.current = queryItems;
      const appliedFilters = queryItems?.reduce((acc, currValue) => {
        acc[currValue] = (router?.query[currValue] as string).split('::');
        return acc;
      }, {});

      setCurrentFilters({ ...defaultFilters, ...appliedFilters });
    } else {
      if (lastQueryItems?.current?.length) {
        setCurrentFilters({ ...defaultFilters });
      }
    }
  }, [router?.query]);

  return (
    <Layout>
      <Head>
        <title>Shop | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="bg-gray-100 min-h-screen">
          <main className="container p-4 mx-auto">
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/">
                      <a className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    <Link href="/shop">
                      <a className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700">Shop</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    <a
                      href="#"
                      className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700"
                      aria-current="page"
                    >
                      Listing
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-1 bg-white rounded-lg p-4">
                <form className="hidden lg:block">
                  <Disclosure defaultOpen>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left  flex justify-between items-center p-2 rounded-sm mb-2">
                          {verticalList?.length ? (
                            <>
                              <h3 className="text-gray-700 ">Filters</h3>
                              {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                            </>
                          ) : null}
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="space-y-2">
                            {verticalList?.map((vertical) => {
                              return (
                                <div
                                  className="flex items-center cursor-pointer"
                                  key={vertical?._id}
                                  onClick={() => updateFilter(vertical?._id, 'vertical')}
                                >
                                  <input
                                    id="filter-category-0"
                                    name="category[]"
                                    value="new-arrivals"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white cursor-pointer"
                                    checked={vertical?.selected}
                                    readOnly
                                  />
                                  <label
                                    htmlFor="filter-category-0"
                                    className="ml-3 text-sm text-gray-900 cursor-pointer"
                                  >
                                    {vertical?.name}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <div className="border-b border-gray-200 py-6">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="w-full text-left flex justify-between items-center p-2 rounded-sm mb-2">
                            <h3 className="text-gray-700 ">Brands</h3>

                            <span className="ml-6 flex items-center">
                              {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <div className="space-y-2">
                              {retailerList?.map((retailer) => {
                                return (
                                  <div
                                    className="flex items-center cursor-pointer"
                                    key={retailer?._id}
                                    onClick={() => updateFilter(retailer?._id, 'retailer')}
                                  >
                                    <input
                                      id="filter-category-0"
                                      name="category[]"
                                      value="new-arrivals"
                                      type="checkbox"
                                      className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white cursor-pointer"
                                      checked={retailer?.selected}
                                      readOnly
                                    />
                                    <label
                                      htmlFor="filter-category-0"
                                      className="ml-3 text-sm text-gray-900 cursor-pointer"
                                    >
                                      {retailer?.name}
                                    </label>
                                  </div>
                                );
                              })}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </form>
              </div>

              <div className="col-span-4 rounded">
                <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-1">
                  {isFetching ? (
                    <>
                      {[...Array(internalPages?.Shop?.DEFAULT_PAGE_SIZE)].map((_d, _i) => {
                        return <CollectionCardDimmer key={_i} />;
                      })}
                    </>
                  ) : (
                    <Tween
                      from={{ scale: 0.5, opacity: 0, y: 50 }}
                      to={{ scale: 1, opacity: 1, y: 0 }}
                      stagger={0.1}
                      duration={0.5}
                    >
                      {currentRenderList?.map((item) => {
                        return (
                          <div key={item?._id}>
                            <Link href={`/product-view/${item?._id}`}>
                              <a className="group">
                                <div className="bg-white p-4 xl:p-8 rounded-lg h-full">
                                  <div className="w-full mb-2 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                                    <Image
                                      src={item?.imageUrl}
                                      alt={item?.name}
                                      className="w-full h-full object-center object-contain filter group-hover:contrast-115 group-hover:brightness-110"
                                      layout="fill"
                                      placeholder="blur"
                                      blurDataURL={blurredBgProduct}
                                    />
                                  </div>
                                  <small className="mt-4 text-xs text-gray-500">{item?.retailer}</small>
                                  <h3 className="text-md text-gray-700 overflow-ellipsis line-clamp-2">{item?.name}</h3>
                                  <p className="text-lg font-medium text-gray-900">
                                    <span>${item?.displayPrice}</span>
                                    {item?.msrp && item?.msrp > 0 && item?.msrp > item?.price && (
                                      <small className="text-sm text-gray-500 line-through inline-block ml-2">
                                        ${item?.msrp}
                                      </small>
                                    )}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </Tween>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center my-14">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <Pagination buttonList={buttons} />
              </nav>
            </div>
          </main>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { query = {} } = context || {};
  //TODO: Add page number support
  const payload = Object.keys(query).reduce((acc, item) => {
    if (item !== 'page') {
      if (item === 'searchText') {
        acc[item] = query[item];
      } else {
        acc[item] = query[item].split('::');
      }
    }
    return acc;
  }, {});

  const allFilters = { ...defaultFilters, ...payload };

  const assetsList = await fetchAssetList({ filters: { ...allFilters } }, context);

  return {
    props: {
      initialFilters: payload,
      assetsList,
    },
  };
}

export default React.memo(Shop);
