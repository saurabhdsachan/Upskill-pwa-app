import Layout from '@components/Shared/Layout';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
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
        <main className="container p-4 py-2 mx-auto">
          <div className="grid grid-cols-5 gap-2">
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
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
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
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
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
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
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
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
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
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
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
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
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
                          className="h-4 w-4 border-gray-300 rounded text-gray-900 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white"
                        />
                        <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-900">
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
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
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
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
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-white p-4 rounded">
                  <Link href="/">
                    <a className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636557442/server/production/server/assets/618be1e89adbaf001cd9dfe7/product_0_0olj99ko25g1.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636554369/server/production/server/assets/618bce99482d66001cbaab87/product_0_035k2l7le7i9.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636551584/server/production/server/assets/618bcb53482d66001cba8f19/product_0_f0i9086ekp9.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636550111/server/production/server/assets/618bc58d482d66001cba2ceb/product_0_7deoh5nca519.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636557442/server/production/server/assets/618be1e89adbaf001cd9dfe7/product_0_0olj99ko25g1.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636557442/server/production/server/assets/618be1e89adbaf001cd9dfe7/product_0_0olj99ko25g1.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636557442/server/production/server/assets/618be1e89adbaf001cd9dfe7/product_0_0olj99ko25g1.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
                          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_500/v1636557442/server/production/server/assets/618be1e89adbaf001cd9dfe7/product_0_0olj99ko25g1.jpg"
                          alt="Olive drab green insulated bottle with flared screw lid and flat top."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
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
        </main>
      </div>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default React.memo(Shop);
