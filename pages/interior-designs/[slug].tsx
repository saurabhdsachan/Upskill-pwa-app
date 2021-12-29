import ImageGrid from '@components/InteriorDesigns/ImageGrid';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SocialShare from '@components/Shared/Social';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/outline';
import fetcher from '@utils/fetcher';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type Asset = {
  price: number;
  currency: string;
  retailer: string;
  _id: string;
  name: string;
  retailLink: string;
  cdn: string;
  id: string;
};

type DesignView = {
  design: {
    _id: string;
    name: string;
    longDescription: string;
    metaDescription: string;
    description: string;
    metaTitle: string;
    altTag: string;
    slug: string;
    designCostEstimate: number;
    cdnRender: Array<string>;
    assets: Array<Asset>;
    tags: Array<string>;
    room: {
      roomType: string;
      slug: string;
      _id: string;
    };
    publishedDate: string;
  };
};

const DesignView: React.FC<DesignView> = ({ design }) => {
  return (
    <Layout>
      <Head>
        <title>{design?.name} | Spacejoy</title>
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="bg-gray-100">
          <div className="container mx-auto p-4">
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
                    <Link href="/interior-designs">
                      <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize">Ideas</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    <Link href={`/collection/${design?.room?.slug}`}>
                      <a className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize">
                        {design?.room?.roomType}
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    <a
                      className="ml-2 text-xs font-medium text-gray-500 hover:text-gray-700 capitalize"
                      aria-current="page"
                    >
                      {design?.name}
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
            <ImageGrid images={design?.cdnRender} />
            <div className="my-8">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{design?.name}</h2>
              <p className="text-gray-700 mt-2">{design?.description}</p>
            </div>
            <SocialShare />
            <PreFooter />
          </div>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

const getFirstSet = async () => {
  return {
    products: [
      { slug: 'best-selling-home-decor-and-furniture-pieces-of-2021' },
      { slug: 'make-your-entryway-more-welcoming-this-christmas' },
      { slug: 'beautiful-and-bright-a-modern-rustic-dining-room' },
      { slug: 'colorful-mid-century-modern-living-room-with-rattan-furniture' },
      { slug: 'a-transitional-living-dining-room-with-rustic-accents' },
      { slug: 'mid-century-modern-balcony-design-with-a-green-ceiling' },
      { slug: 'mid-century-modern-coastal-living-room' },
      { slug: 'pine-green-rustic-farmhouse-dining-room' },
      { slug: 'modern-and-trendy-boho-living-room-with-japandi-decor' },
      { slug: 'industrial-glam-living-room-with-mustard-accents' },
      { slug: 'transitional-home-office-with-a-sleeper-sofa' },
      { slug: 'an-art-deco-glam-bedroom-with-bold-walls-and-metallic-accents' },
      { slug: 'urban-rustic-kids-bedroom-with-twin-beds' },
      { slug: 'contemporary-transitional-open-concept-living-dining-room' },
      { slug: 'white-and-beach-themed-modern-bedroom-decor' },
      { slug: 'galaxy-themed-blue-childrens-room-with-star-bedding' },
      { slug: 'mid-century-glam-living-dining-room-with-mettalic-accents' },
    ],
  };
};

export async function getStaticPaths() {
  // get all product paths
  const { products } = await getFirstSet();
  const paths = products.map((product) => ({
    params: { slug: product?.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }) => {
  const response = await fetcher({ endPoint: `/web/designs/public/slug/${params?.slug}`, method: 'GET' });
  const { data, statusCode } = response;
  if (statusCode < 300) {
    return {
      props: {
        design: data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default DesignView;
