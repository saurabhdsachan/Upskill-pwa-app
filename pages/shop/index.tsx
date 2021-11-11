import Layout from '@components/Shared/Layout';
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Shop = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Shop | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <div className="bg-gray-100 min-h-screen">
        <main className="container p-4 pt-8 mx-auto">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-1 bg-white rounded p-4">
              <h3 className="text-gray-700 mb-4">Filters</h3>
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="text-sm text-gray-900 space-y-2 pb-6 border-b border-gray-200">
                  <li>
                    <a href="#">Totes</a>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                  </li>
                  <li>
                    <a href="#">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3">
                    <button
                      type="button"
                      className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <span className="font-bold text-gray-700">Color</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-3 h-3 mr-2" />
                        <MinusIcon className="w-3 h-3" />
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-2">
                      <fieldset>
                        <legend className="sr-only">Choose a color</legend>
                        <div className="flex items-center space-x-3">
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="White"
                              className="sr-only"
                              aria-labelledby="color-choice-0-label"
                            />
                            <p id="color-choice-0-label" className="sr-only">
                              White
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                            />
                          </label>
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Gray"
                              className="sr-only"
                              aria-labelledby="color-choice-1-label"
                            />
                            <p id="color-choice-1-label" className="sr-only">
                              Gray
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                            />
                          </label>
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Black"
                              className="sr-only"
                              aria-labelledby="color-choice-2-label"
                            />
                            <p id="color-choice-2-label" className="sr-only">
                              Black
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                            />
                          </label>
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-blue-500">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Black"
                              className="sr-only"
                              aria-labelledby="color-choice-2-label"
                            />
                            <p id="color-choice-2-label" className="sr-only">
                              Black
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-blue-500 border border-black border-opacity-10 rounded-full"
                            />
                          </label>
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-500">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Black"
                              className="sr-only"
                              aria-labelledby="color-choice-2-label"
                            />
                            <p id="color-choice-2-label" className="sr-only">
                              Black
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-red-500 border border-black border-opacity-10 rounded-full"
                            />
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3">
                    <button
                      type="button"
                      className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span className="font-bold text-gray-700">Category</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-3 h-3 mr-2" />
                        <MinusIcon className="w-3 h-3" />
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-900">
                          New Arrivals
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-900">
                          Sale
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-900">
                          Travel
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-900">
                          Organization
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-900">
                          Accessories
                        </label>
                      </div>
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
                        <PlusIcon className="w-3 h-3 mr-2" />
                        <MinusIcon className="w-3 h-3" />
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
              <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599158/spj-v2/shop/asset-13_hm1ijw.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599158/spj-v2/shop/asset-5_gpnkkc.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599163/spj-v2/shop/asset-2_r7d5uo.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599159/spj-v2/shop/asset-18_bvv5bh.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599158/spj-v2/shop/asset-4_wnnhea.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-1 xl:aspect-h-1">
                        <Image
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599163/spj-v2/shop/asset-3_hgs1zv.png"
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599161/spj-v2/shop/asset-14_cpuzwl.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599161/spj-v2/shop/asset-15_yedaun.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599161/spj-v2/shop/asset-20_sw7xsb.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599160/spj-v2/shop/asset-16_t7qisa.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636599160/spj-v2/shop/asset-17_txsqyc.png"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-contain group-hover:opacity-75"
                          layout="fill"
                        />
                      </div>
                      <small className="mt-4 text-xs text-gray-500">Wayfair</small>
                      <h3 className="text-md text-gray-700">Nomad Tumbler</h3>
                      <p className="text-lg font-medium text-gray-900">$35.00</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-14">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-current="page"
                className="z-10 bg-gray-50 border-gray-500 text-gray-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </main>
      </div>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default React.memo(Shop);
