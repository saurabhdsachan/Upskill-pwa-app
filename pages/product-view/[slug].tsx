import ProductDesignSet from '@components/ProductView/ProductDesignSet';
import SimilarProducts from '@components/ProductView/SimilarProducts';
import Layout from '@components/Shared/Layout';
import { ChevronRightIcon, HeartIcon, HomeIcon, MinusSmIcon, PlusIcon, PlusSmIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import fetcher from '@utils/fetcher';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
const AffirmPrice = dynamic(() => import('@components/Shared/AffirmPrice'), { ssr: false });

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

const renderFeatureSection = (description) => {
  const { type = '' } = description;
  switch (type) {
    case 'vizualOverview':
      return (
        <ul>
          {description?.value?.map((item) => {
            return (
              <li key={item?.image}>
                <Image src={item?.image} height="40" width="40" alt={item?.title} />
                <span>{item?.title}</span>
              </li>
            );
          })}
        </ul>
      );
    case 'string':
      return <li>{description?.value}</li>;
    case 'array[string]':
      return (
        <ul>
          {description?.title && description?.value?.length ? <h3>{description?.title}</h3> : null}
          {description?.value?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      );
    default:
      return null;
  }
};

const ProductView = ({ product }): JSX.Element => {
  const productImages = useMemo(() => {
    return [...(product?.renderImages || []), ...product?.productImages];
  }, [product]);

  return (
    <Layout>
      <Head>
        <title>Product Overview | Spacejoy</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <base href="/" />
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
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
              <div>
                <AnimateBox className="bg-white rounded-lg p-4 lg:p-8 xl:20">
                  <div className="aspect-w-1 aspect-h-1">
                    <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                      <Image
                        src={productImages[0]?.fileUrl}
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
                          src={productImages[1]?.fileUrl}
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
                          src={productImages[2]?.fileUrl}
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
                          src={productImages[3]?.fileUrl}
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
                <small className="text-sm tracking-tight text-gray-500">{product?.retailer?.name}</small>
                <h1 className="text-3xl mt-1 font-extrabold tracking-tight text-gray-900">{product?.name}</h1>
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">
                    ${product?.displayPrice}
                    {product?.msrp && parseFloat(product?.msrp) > 0 && parseFloat(product?.msrp) > product?.price && (
                      <small className="text-sm text-gray-500 line-through inline-block ml-2">${product?.msrp}</small>
                    )}
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
                    <p>{product?.description}</p>
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
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500 ring-1">
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
                  <div className="mt-10 flex sm:flex-col1 space-x-4">
                    <button
                      type="button"
                      className="group hover:shadow-lg text-base text-gray-900 py-3 px-3 rounded-xl bg-white font-medium focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 focus:outline-none"
                    >
                      <MinusSmIcon className="w-6 h-6" />
                    </button>
                    <p className="py-3 px-2">1</p>
                    <button
                      type="button"
                      className="group hover:shadow-lg text-base text-gray-900 py-3 px-3 rounded-xl bg-white font-medium focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 focus:outline-none"
                    >
                      <PlusSmIcon className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      className="group shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 font-medium focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
                    >
                      Add to bag
                    </button>
                    <button
                      type="button"
                      className="group hover:shadow-lg text-base text-gray-900 py-3 px-3 rounded-xl bg-white font-medium focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 focus:outline-none"
                    >
                      <HeartIcon className="w-6 h-6" />
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </form>
                <div className="text-sm text-gray-700 mt-6">
                  {/* <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1636614144/shared/affirm_ejxoqf.svg"
                    alt="Angled front view with bag zipped and handles upright."
                    className="object-center object-contain sm:rounded-lg"
                    width="100"
                    height="50"
                  />
                  <p>
                    Starting at $62/mo with Affirm. <span className="text-blue-400">Pre-qualify Now</span>
                  </p> */}
                  <AffirmPrice totalAmount={product?.price} flow="product" affirmType="as-low-as" />
                </div>
                <section aria-labelledby="details-heading" className="mt-6">
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
                        {product?.meta?.descriptions?.map((item, index) => {
                          return <ul key={`desc-${index}`}>{renderFeatureSection(item)}</ul>;
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <div className="container mx-auto py-16 px-4">
            {/* <div className="sm:flex sm:items-baseline sm:justify-between">
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
            </div> */}

            <div className="pt-16">
              <ProductDesignSet productIds={[product?._id]} />
            </div>
            <div className="pt-16">
              <SimilarProducts productId={product?._id} />
            </div>
          </div>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

const getAllProducts = async () => {
  return {
    products: [
      { slug: '61b4e65ae2f1a100374dcb9e' },
      { slug: '61b4bc69e2f1a100374c62a9' },
      { slug: '61b4a65ab9c243001c2eb35f' },
      { slug: '61b37d7f8aa921001d8c7e3c' },
    ],
  };
};

export async function getStaticPaths() {
  // get all product paths
  const { products } = await getAllProducts();
  const paths = products.map((product) => ({
    params: { slug: product?.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await fetcher({ endPoint: `/v2/asset/${slug}`, method: 'GET' });
  const { data, statusCode } = response;

  if (statusCode < 300) {
    return {
      props: {
        product: data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
export default ProductView;
