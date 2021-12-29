import EmptyState from '@components/Shared/EmptyState';
import Layout from '@components/Shared/Layout';
import Pagination from '@components/Shared/Pagination';
import ProductCard from '@components/Shop/ProductCard';
import ProductCardDimmer from '@components/Shop/ProductCardDimmer';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, HomeIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline';
import usePagination from '@hooks/usePagination';
import { useShopFilterContext } from '@store/ShopFilterContext';
import { internalPages } from '@utils/config';
import { defaultFilters, fetchAssetList } from '@utils/shop/helpers';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

const ProductList = ({ list }) => {
  return (
    <>
      {list?.length ? (
        <>
          {list?.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </>
      ) : (
        <div className="col-span-5 bg-white rounded h-full relative">
          <div className=" sticky top-0">
            <EmptyState title="No matching products found" message="Try changing the filters" />
          </div>
        </div>
      )}
    </>
  );
};

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
    'hits',
    initialFilters
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
          <div className="container p-4 mx-auto">
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
                      <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700">Shop</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    <a
                      href="#"
                      className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700"
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
                  {verticalList?.length !== 0 && (
                    <Disclosure defaultOpen>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="w-full text-left  flex justify-between items-center py-2 rounded-sm mb-2">
                            <h3 className="text-gray-700">Filters</h3>
                            {open ? <MinusIcon className="h-3 w-3" /> : <PlusIcon className="h-3 w-3" />}
                          </Disclosure.Button>
                          <Disclosure.Panel className="mb-8">
                            <div className="space-y-2">
                              {verticalList?.map((vertical) => {
                                return (
                                  <div
                                    className="flex items-center cursor-pointer"
                                    key={vertical?._id}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      updateFilter(vertical?._id, 'vertical');
                                    }}
                                  >
                                    <input
                                      id={`filter-category-${vertical?._id}`}
                                      name={`filter-category-${vertical?.name}`}
                                      value={vertical?.name}
                                      type="checkbox"
                                      className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white cursor-pointer"
                                      checked={vertical?.selected}
                                      readOnly
                                    />
                                    <label
                                      htmlFor={`filter-category-${vertical?._id}`}
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
                  )}
                  {retailerList?.length !== 0 && (
                    <Disclosure defaultOpen>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="w-full text-left flex justify-between items-center py-2 rounded-sm mb-2">
                            <h3 className="text-gray-700">Brands</h3>
                            <span className="ml-6 flex items-center">
                              {open ? <MinusIcon className="h-3 w-3" /> : <PlusIcon className="h-3 w-3" />}
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <div className="space-y-2">
                              {retailerList?.map((retailer) => {
                                return (
                                  <div
                                    className="flex items-center cursor-pointer"
                                    key={retailer?._id}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      updateFilter(retailer?._id, 'retailer');
                                    }}
                                  >
                                    <input
                                      id={`filter-category-${retailer?._id}`}
                                      name={`filter-category-${retailer?.name}`}
                                      value={retailer?._id}
                                      type="checkbox"
                                      className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white cursor-pointer"
                                      checked={retailer?.selected}
                                      readOnly
                                    />
                                    <label
                                      htmlFor={`filter-category-${retailer?._id}`}
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
                  )}
                </form>
              </div>
              <div className="col-span-4 rounded">
                <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-1 h-full">
                  {isFetching ? (
                    <>
                      {[...Array(internalPages?.Shop?.DEFAULT_PAGE_SIZE)].map((_d, _i) => {
                        return <ProductCardDimmer key={_i} />;
                      })}
                    </>
                  ) : (
                    <ProductList list={currentRenderList} />
                  )}
                </div>
              </div>
            </div>
            <div className="text-center my-14">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <Pagination buttonList={buttons} />
              </nav>
            </div>
          </div>
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
