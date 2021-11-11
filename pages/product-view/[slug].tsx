import Layout from '@components/Shared/Layout';
import { ChevronRightIcon, HeartIcon, HomeIcon, PlusIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  animation: ${entry} 0.8s forwards;
  transform: translateY(20px);
  animation-delay: 0ms;
`;

const ProductView = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Product Overview | Spacejoy</title>
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
              <div>
                <AnimateBox className="bg-white rounded-lg p-4 lg:p-8 xl:20">
                  <div className="aspect-w-1 aspect-h-1">
                    <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                      <Image
                        src="https://res.cloudinary.com/spacejoy/image/upload/v1636633702/spj-v2/shop/p1_i8qivg.png"
                        alt="Angled front view with bag zipped and handles upright."
                        className="object-center object-contain sm:rounded-lg"
                        layout="fill"
                      />
                    </div>
                  </div>
                </AnimateBox>
                <div className="grid grid-cols-3 mt-4 gap-4">
                  <div className="bg-white rounded p-4 col-span-2 row-span-2">
                    <div className="aspect-w-1 aspect-h-1">
                      <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636633702/spj-v2/shop/p2_c6uoek.png"
                          alt="Angled front view with bag zipped and handles upright."
                          className="object-center object-contain sm:rounded-lg"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636633703/spj-v2/shop/p3_bwrk0p.png"
                          alt="Angled front view with bag zipped and handles upright."
                          className="object-center object-cover sm:rounded-lg"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                        <Image
                          src="https://res.cloudinary.com/spacejoy/image/upload/v1636633703/spj-v2/shop/p4_n4sjvk.png"
                          alt="Angled front view with bag zipped and handles upright."
                          className="object-center object-cover sm:rounded-lg"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <small className="text-sm tracking-tight text-gray-500">Wayfair</small>
                <h1 className="text-3xl mt-1 font-extrabold tracking-tight text-gray-900">Zip Tote Basket</h1>
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">
                    $140.00 <small className="text-sm text-gray-500 line-through">$150.00</small>
                  </p>
                  <small className="text-xs text-gray-500">inclusive of all taxes</small>
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
                    <div className="ml-4 flex">
                      <a href="#" className="text-sm font-medium text-gray-500 hover:text-red-500">
                        See all 512 reviews
                      </a>
                    </div>
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
                    <h3 className="text-gray-900 text-sm font-medium">Color</h3>
                    <fieldset className="mt-6">
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
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400 ring-1">
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
                <div className="text-sm text-gray-700 mt-6">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1636614144/shared/affirm_ejxoqf.svg"
                    alt="Angled front view with bag zipped and handles upright."
                    className="object-center object-contain sm:rounded-lg"
                    width="100"
                    height="50"
                  />
                  <p>
                    Starting at $62/mo with Affirm. <span className="text-blue-400">Pre-qualify Now</span>
                  </p>
                </div>
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
          <div className="container mx-auto py-16 px-4">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
              <a href="#" className="hidden text-sm text-gray-900 sm:block">
                Browse all categories<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-center object-cover group-hover:opacity-75"
                  layout="fill"
                />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                <div className="p-6 flex items-end">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                  layout="fill"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                  layout="fill"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                  <div>
                    <h3 className="text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm text-indigo-600 hover:text-indigo-500">
                Browse all categories<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="pt-16">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Collection</h2>
              <p className="mt-4 text-base text-gray-500">
                Each season, we collaborate with world-class designers to create a collection inspired by the natural
                world.
              </p>
              <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-x-8">
                <a href="#" className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg"
                      alt="Brown leather key ring with brass metal loops and rivets on wood table."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Keep your phone, keys, and wallet together, so you can lose everything at once.
                  </p>
                </a>
                <a href="#" className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg"
                      alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    The rest of the house will still be a mess, but your desk will look great.
                  </p>
                </a>
                <a href="#" className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg"
                      alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Be more productive than enterprise project managers with a single piece of paper.
                  </p>
                </a>
                <a href="#" className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg"
                      alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Be more productive than enterprise project managers with a single piece of paper.
                  </p>
                </a>
                <a href="#" className="group block">
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg"
                      alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                      className="w-full h-full object-center object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Be more productive than enterprise project managers with a single piece of paper.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};
export default ProductView;
