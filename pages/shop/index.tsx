import Layout from '@components/Shared/Layout';
import Pagination from '@components/Shared/Pagination';
import { ChevronRightIcon, HomeIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline';
import usePagination from '@hooks/usePagination';
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

  const { currentRenderList, buttons } = usePagination(
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
      return vertical?.filter((item) => item?.subcategory === selectedSubCategories[0]?._id);
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
                    <a href="#" className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700">
                      Shop
                    </a>
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
                <h3 className="text-gray-700 mb-4">Filters</h3>
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
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
                          <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-900 cursor-pointer">
                            {vertical?.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3">
                      <button
                        type="button"
                        className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span className="font-bold text-gray-700">Brands</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="text-gray-900 w-3 h-3 mr-2" />
                          <MinusIcon className="text-gray-900 w-3 h-3" />
                        </span>
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-1">
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
                              <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-900 cursor-pointer">
                                {retailer?.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="py-6">
                    <h3 className="-my-3">
                      <button
                        type="button"
                        className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span className="font-bold text-gray-700">Size</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="text-gray-900 w-3 h-3 mr-2" />
                          <MinusIcon className="text-gray-900 w-3 h-3" />
                        </span>
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-2">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="filter-size-0"
                            name="size[]"
                            value="2l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-900">
                            2L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-1"
                            name="size[]"
                            value="6l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-900">
                            6L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-2"
                            name="size[]"
                            value="12l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-900">
                            12L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-3"
                            name="size[]"
                            value="18l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-900">
                            18L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-4"
                            name="size[]"
                            value="20l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-4" className="ml-3 text-sm text-gray-900">
                            20L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-5"
                            name="size[]"
                            value="40l"
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                          />
                          <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-900">
                            40L
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-span-4 rounded">
                <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-1">
                  <Tween
                    from={{ scale: 0.5, opacity: 0, y: 50 }}
                    to={{ scale: 1, opacity: 1, y: 0 }}
                    stagger={0.5}
                    duration={1}
                  >
                    {currentRenderList?.map((item) => {
                      return (
                        <div key={item?._id}>
                          <Link href={`/product-view/${item?._id}`}>
                            <a className="group">
                              <div className="bg-white p-8 rounded-lg h-full">
                                <div className="w-full mb-2 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                                  <Image
                                    src={item?.imageUrl}
                                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                    className="w-full h-full object-center object-contain filter group-hover:contrast-115 group-hover:brightness-110"
                                    layout="fill"
                                  />
                                </div>
                                <small className="mt-4 text-xs text-gray-500">{item?.retailer}</small>
                                <h3 className="text-md text-gray-700 overflow-ellipsis line-clamp-2">{item?.name}</h3>
                                <p className="text-lg font-medium text-gray-900">
                                  ${item?.displayPrice}
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
