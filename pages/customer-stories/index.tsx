import Layout from '@components/Shared/Layout';
import SectionTitle from '@components/Shared/SectionTitle';
import { blurredBgImage } from '@public/images/bg-base-64';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const CustomerStories: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Customer Stories | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <SectionTitle
          feature="Stories"
          title="Customer Stories"
          description="How spacejoy work closely to turn a house in dream house"
        />
        <div className="bg-gray-100 mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="relative -top-32">
              <div className="absolute h-20 w-20 bg-red-100 top-1/2 -right-10 z-10" />
              <div className="rounded-xl shadow-xl">
                <Image
                  className="object-cover rounded-xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1637037796/spj-v2/careers_tqwyqx.webp"
                  height="700"
                  width="1500"
                  alt="career banner"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={blurredBgImage}
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <p className="mt-10 text-base text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa aspernatur. Aliquid et odio
                  repudiandae debitis porro voluptatem? Maiores saepe optio nisi alias expedita tempore vel cum
                  quibusdam soluta rerum.
                </p>
              </div>
            </div>
          </div>
          <SectionTitle
            feature="Journey"
            title="A curated list of stories"
            description="How spacejoy work closely to turn a house in dream house"
          />
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default CustomerStories;
