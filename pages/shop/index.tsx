import Layout from '@components/Shared/Layout';
import { MinusIcon, PlusIcon, ViewGridIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
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
      <div className="bg-white">
        <main className="container px-4 mx-auto">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Shop</h1>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Sort
                    <svg
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>

                <ViewGridIcon className="w-4 h-4" />
              </button>
              <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                <span className="sr-only">Filters</span>

                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-10">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="text-sm font-medium text-gray-900 space-y-2 pb-6 border-b border-gray-200">
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
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Color</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        <MinusIcon className="w-4 h-4" />
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-900">
                          White
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-900">
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-900">
                          Blue
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-900">
                          Brown
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-900">
                          Green
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-900">
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Category</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        <MinusIcon className="w-4 h-4" />
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-900">
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">Size</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        <MinusIcon className="w-4 h-4" />
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
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
                          className="h-4 w-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                        />
                        <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-900">
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 lg:grid-cols-4">
                  <a href="#" className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        layout="fill"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                  </a>

                  <a href="#" className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        layout="fill"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                  </a>

                  <a href="#" className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Person using a pen to cross a task off a productivity paper card."
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        layout="fill"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                  </a>

                  <a href="#" className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        layout="fill"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default Shop;
