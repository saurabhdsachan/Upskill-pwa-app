import ProductDesignSet from '@components/ProductView/ProductDesignSet';
import SimilarProducts from '@components/ProductView/SimilarProducts';
import Layout from '@components/Shared/Layout';
import LottieAnimation from '@components/Shared/LottieAnimation';
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
import useBoolean from '@hooks/useBoolean';
import { blurredBgProduct } from '@public/images/bg-base-64';
import offerLottie from '@public/lotties/offer.json';
import fetcher from '@utils/fetcher';
import { currencyFormat } from '@utils/helpers';
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
    case 'visualOverview':
      return (
        <ul role="list">
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
        <ul role="list">
          <li>{description?.value}</li>
        </ul>
      );
    case 'array[string]':
      return (
        <ul role="list">
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
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const productImages = useMemo(() => {
    return [...(product?.renderImages || []), ...product?.productImages];
  }, [product]);

  return (
    <Layout>
      <Head>
        <title>{product?.name} | Spacejoy</title>
        <base href="/" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="bg-gray-100">
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
                  {productImages[1] && (
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
                  )}
                  {productImages[2] && (
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
                  )}
                  {productImages[3] && (
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
                  )}
                </div>
              </div>
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <small className="text-sm tracking-tight text-gray-500">{product?.retailer?.name}</small>
                <h1 className="text-3xl mt-1 font-extrabold tracking-tight text-gray-900">{product?.name}</h1>
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">
                    {currencyFormat(product?.displayPrice)}
                    {product?.msrp && parseFloat(product?.msrp) > 0 && parseFloat(product?.msrp) > product?.price && (
                      <small className="text-sm text-gray-500 line-through inline-block ml-2">
                        {currencyFormat(product?.msrp)}
                      </small>
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
                <div className="mt-3">
                  <h3 className="sr-only">Description</h3>
                  <div className="text-sm">
                    <p className={`${!value && 'line-clamp-3'} text-gray-700`}>{product?.description}</p>
                    <button className="my-0.5 text-gray-500" onClick={toggle}>
                      {!value ? '... read more' : 'hide'}
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-bold text-sm">Dimensions: </span>
                  <span className="inline-block ml-2 text-sm text-gray-700">{`${(
                    product?.dimension?.width * 12
                  ).toFixed(2)}"W X ${(product?.dimension?.depth * 12).toFixed(2)}"D X ${(
                    product?.dimension?.height * 12
                  ).toFixed(2)} H`}</span>
                </div>
                <div className="mt-3">
                  <span className="font-bold text-sm">Material: </span>
                  <span className="inline-block ml-2 text-sm text-gray-700">{product?.material}</span>
                </div>
                <div className="mt-3">
                  <span className="text-gray-900 text-sm font-bold">Color:</span>
                  <span className="inline-block ml-2 text-sm text-gray-700">
                    {product?.colors?.map((color, index) => {
                      return (
                        <span className="capitalize text-sm" key={color}>
                          {color}
                          {index === product?.colors?.length - 1 ? '' : ', '}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <form className="mt-3">
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
                {product?.price && (
                  <div className="text-sm text-gray-700 my-6">
                    <AffirmPrice totalAmount={product?.price} flow="product" affirmType="as-low-as" />
                  </div>
                )}
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-left flex justify-between py-4 items-center rounded-sm border-b border-gray-300">
                        <div className="flex">
                          <span className="text-gray-900 text-sm mr-2">Available Offers</span>
                          <LottieAnimation animationData={offerLottie} height={20} width={20} />
                        </div>
                        {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <div className="mt-4 text-base prose text-gray-700">
                          <ul role="list">
                            <li>
                              Get exclusive discount of <strong>extra 15%</strong> when you purchase on Spacejoy.
                            </li>
                            <li>Use coupon code HOLIDAY75 to get flat $75 off on orders above $999.</li>
                            <li>Get $25 when you refer a friend.</li>
                          </ul>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {product?.meta && product?.meta?.descriptions?.length && (
                  <Disclosure defaultOpen>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left flex justify-between py-4 items-center rounded-sm border-b border-gray-300">
                          <span className="text-gray-900 text-sm">Product Description</span>
                          {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          {product?.meta?.descriptions?.map((item, index) => {
                            return (
                              <div key={`desc-${index}`} className="mt-4 text-sm text-gray-700 prose">
                                {renderFeatureSection(item)}
                              </div>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
                {product?.retailer?.shippingPolicy && (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left flex justify-between py-4 items-center rounded-sm border-b border-gray-300">
                          <span className="text-gray-900 text-sm">Shipping Policy</span>
                          {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="mt-4 text-sm text-gray-700">{product?.retailer?.shippingPolicy}</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
                {product?.retailer?.returnPolicy && (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full text-left flex justify-between py-4 items-center rounded-sm border-b border-gray-300">
                          <span className="text-gray-900 text-sm">Return Policy</span>
                          {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="mt-4 text-sm text-gray-700">{product?.retailer?.returnPolicy}</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <SimilarProducts productId={product?._id} />
            <ProductDesignSet productIds={[product?._id]} />
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

  return statusCode < 300 ? { props: { product: data } } : { notFound: true };
};

export default ProductView;
