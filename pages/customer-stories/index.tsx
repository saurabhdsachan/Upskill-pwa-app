import Layout from '@components/Shared/Layout';
import SectionTitle from '@components/Shared/SectionTitle';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';

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
              <ScrollTrigger start="-500px center" end="600px center">
                <Tween
                  from={{ scale: 0, opacity: 0, y: 100, x: 100 }}
                  to={{ scale: 1, opacity: 1, y: 0, x: 0 }}
                  delay={0.5}
                >
                  <div className="absolute h-40 w-40 bg-blue-400 top-20 -left-10 rounded-full" />
                </Tween>
                <Tween from={{ scale: 0 }} to={{ scale: 1 }}>
                  <div className="absolute h-20 w-20 bg-red-400 top-1/2 -right-10 rounded-full z-10" />
                </Tween>
                <Tween from={{ scale: 0.9, y: 100 }} to={{ scale: 1, y: 0 }}>
                  <div className="rounded-3xl shadow-xl">
                    <Image
                      className="object-cover rounded-3xl"
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1637037796/spj-v2/careers_tqwyqx.jpg"
                      height="700"
                      width="1500"
                      alt="career banner"
                      layout="responsive"
                    />
                  </div>
                </Tween>
              </ScrollTrigger>
              <div className="max-w-2xl mx-auto">
                <p className="mt-10 text-base text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa aspernatur. Aliquid et odio
                  repudiandae debitis porro voluptatem? Maiores saepe optio nisi alias expedita tempore vel cum
                  quibusdam soluta rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
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
