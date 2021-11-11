import Layout from '@components/Shared/Layout';
import { ChevronRightIcon, HeartIcon, HomeIcon, PlusIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const ProductView = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Help | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="bg-gray-100">
          <main className="container p-4 mx-auto">
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <HomeIcon className="w-4 h-4" />
                      <span className="sr-only">Home</span>
                    </a>
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

            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
              <div className="flex flex-col-reverse">
                <div className="w-full aspect-w-1 aspect-h-1">
                  <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                      alt="Angled front view with bag zipped and handles upright."
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Zip Tote Basket</h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">$140</p>
                </div>

                <div className="mt-3">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 flex-shrink-0 text-gray-900" />
                      <StarIcon className="h-5 w-5 flex-shrink-0 text-gray-900" />
                      <StarIcon className="h-5 w-5 flex-shrink-0 text-gray-900" />
                      <StarIcon className="h-5 w-5 flex-shrink-0 text-gray-900" />
                      <StarIcon className="h-5 w-5 flex-shrink-0 text-gray-300" />
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div className="text-base text-gray-700 space-y-6">
                    <p>
                      The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With
                      convertible straps, you can hand carry, should sling, or backpack this convenient and spacious
                      bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                    </p>
                  </div>
                </div>

                <form className="mt-6">
                  <div>
                    <h3 className="text-sm text-gray-600">Color</h3>

                    <fieldset className="mt-2">
                      <legend className="sr-only">Choose a color</legend>
                      <div className="flex items-center space-x-3">
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Washed Black"
                            className="sr-only"
                            aria-labelledby="color-choice-0-label"
                          />
                          <p id="color-choice-0-label" className="sr-only">
                            Washed Black
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"
                          />
                        </label>

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            className="sr-only"
                            aria-labelledby="color-choice-1-label"
                          />
                          <p id="color-choice-1-label" className="sr-only">
                            White
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                          />
                        </label>

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Washed Gray"
                            className="sr-only"
                            aria-labelledby="color-choice-2-label"
                          />
                          <p id="color-choice-2-label" className="sr-only">
                            Washed Gray
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"
                          />
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-10 flex sm:flex-col1">
                    <button
                      type="button"
                      className="group shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 font-medium focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
                    >
                      Add to bag
                    </button>

                    <button
                      type="button"
                      className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    >
                      <HeartIcon className="w-6 h-6" />
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </form>

                <section aria-labelledby="details-heading" className="mt-12">
                  <h2 id="details-heading" className="sr-only">
                    Additional details
                  </h2>

                  <div className="border-t divide-y divide-gray-200">
                    <div>
                      <h3>
                        <button
                          type="button"
                          className="group relative w-full py-6 flex justify-between items-center text-left"
                          aria-controls="disclosure-1"
                          aria-expanded="false"
                        >
                          <span className="text-gray-900 text-sm font-medium">Features</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon className="text-gray-900 w-3 h-3 " />
                          </span>
                        </button>
                      </h3>
                      <div className="pb-6 prose prose-sm" id="disclosure-1">
                        <ul role="list">
                          <li>Multiple strap configurations</li>
                          <li>Spacious interior with top zip</li>
                          <li>Leather handle and tabs</li>
                          <li>Interior dividers</li>
                          <li>Stainless strap loops</li>
                          <li>Double stitched construction</li>
                          <li>Water-resistant</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default ProductView;
