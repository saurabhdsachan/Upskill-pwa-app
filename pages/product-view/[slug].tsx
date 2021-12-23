import ProductDesignSet from '@components/ProductView/ProductDesignSet';
import SimilarProducts from '@components/ProductView/SimilarProducts';
import Layout from '@components/Shared/Layout';
import { Disclosure } from '@headlessui/react';
import {
  ChevronRightIcon,
  HeartIcon,
  HomeIcon,
  MinusIcon,
  MinusSmIcon,
  PlusIcon,
  PlusSmIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgProduct } from '@public/images/bg-base-64';
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
        <ul className="p-2 bg-gray-200 rounded-lg">
          {description?.value?.map((item) => {
            return (
              <li key={item?.image} className="flex items-center">
                <Image src={item?.image} height="40" width="40" alt={item?.title} />
                <span className="font-bold">{item?.title}</span>
              </li>
            );
          })}
        </ul>
      );
    case 'string':
      return (
        <ul className="p-0">
          <li>{description?.value}</li>
        </ul>
      );
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

  console.log('product is ----', product);

  return (
    <Layout>
      <Head>
        <title>Product Overview | Spacejoy</title>
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
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
              <div className="sticky top-0">
                <AnimateBox className="bg-white rounded-lg p-4 lg:p-8 xl:20">
                  <div className="aspect-w-1 aspect-h-1">
                    <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                      <Image
                        src={productImages[0]?.fileUrl}
                        alt="Angled front view with bag zipped and handles upright."
                        className="object-center object-contain sm:rounded-lg"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={blurredBgProduct}
                      />
                    </div>
                  </div>
                </AnimateBox>

                <div className="grid grid-cols-3 mt-4 gap-4">
                  {productImages[1] ? (
                    <div className="bg-white rounded p-4 col-span-2 row-span-2">
                      <div className="aspect-w-1 aspect-h-1">
                        <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                          <Image
                            src={productImages[1]?.fileUrl}
                            alt="Angled front view with bag zipped and handles upright."
                            className="object-center object-contain sm:rounded-lg"
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={blurredBgProduct}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {productImages[2] ? (
                    <div className="bg-white rounded p-4">
                      <div className="aspect-w-1 aspect-h-1">
                        <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                          <Image
                            src={productImages[2]?.fileUrl}
                            alt="Angled front view with bag zipped and handles upright."
                            className="object-center object-cover sm:rounded-lg"
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={blurredBgProduct}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {productImages[3] ? (
                    <div className="bg-white rounded p-4">
                      <div className="aspect-w-1 aspect-h-1">
                        <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                          <Image
                            src={productImages[3]?.fileUrl}
                            alt="Angled front view with bag zipped and handles upright."
                            className="object-center object-cover sm:rounded-lg"
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={blurredBgProduct}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
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
                    <p className="text-sm line-clamp-3">{product?.description}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="font-bold text-sm">Dimensions:</span>
                  <span className="inline-block ml-2 text-sm">{`${(product?.dimension?.width * 12).toFixed(2)}"W X ${(
                    product?.dimension?.depth * 12
                  ).toFixed(2)}"D X ${(product?.dimension?.height * 12).toFixed(2)} H`}</span>
                </div>
                <form className="mt-2">
                  <div>
                    <span className="text-gray-900 text-sm font-bold">Color:</span>

                    <span className="inline-block ml-2">
                      {product?.colors &&
                        product?.colors?.map((color, index) => {
                          return (
                            <span className="capitalize text-sm" key={color}>
                              {color}
                              {index === product?.colors?.length - 1 ? '' : ','}
                            </span>
                          );
                        })}
                    </span>
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
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1636614144/shared/affirm_ejxoqf.svg"
                    alt="affirm logo"
                    className="object-center object-contain sm:rounded-lg"
                    width="100"
                    height="50"
                  />
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
                        {product?.material && product?.material?.toLowerCase() !== 'n/a' ? (
                          <div className="py-2">
                            <span className="font-bold">Material:</span>
                            {'    '}
                            {product?.material}
                          </div>
                        ) : null}
                        {product?.meta && product?.meta?.descriptions?.length ? (
                          <>
                            <Disclosure defaultOpen>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="w-full text-left  flex justify-between py-2 items-center rounded-sm mb-2 border-b border-gray-300">
                                    <h3>Product Description</h3>
                                    {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                                  </Disclosure.Button>
                                  <Disclosure.Panel>
                                    {product?.meta?.descriptions?.map((item, index) => {
                                      return (
                                        <ul key={`desc-${index}`} className="p-0">
                                          {renderFeatureSection(item)}
                                        </ul>
                                      );
                                    })}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </>
                        ) : null}
                        {product?.retailer?.shippingPolicy ? (
                          <>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="w-full text-left  flex justify-between py-2 items-center rounded-sm mb-2 border-b border-gray-300">
                                    <h3>Shipping Policy</h3>
                                    {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                                  </Disclosure.Button>
                                  <Disclosure.Panel>{product?.retailer?.shippingPolicy}</Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </>
                        ) : null}

                        {product?.retailer?.returnPolicy ? (
                          <>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="w-full text-left  flex justify-between py-2 items-center rounded-sm mb-2 border-b border-gray-300">
                                    <h3>Return Policy</h3>
                                    {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                                  </Disclosure.Button>
                                  <Disclosure.Panel>{product?.retailer?.returnPolicy}</Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <div className="container mx-auto py-16 px-4">
            <div className="pt-16">
              <SimilarProducts productId={product?._id} />
            </div>
            <div className="pt-16">
              <ProductDesignSet productIds={[product?._id]} />
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
