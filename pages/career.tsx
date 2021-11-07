import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SectionTitle from '@components/Shared/SectionTitle';
import { GiftIcon, GlobeIcon, HandIcon, HeartIcon, LinkIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const career: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Career @Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container mx-auto px-4">
          <Image
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3600&q=80"
            height="400"
            width="1500"
            alt="career banner"
            layout="responsive"
          />
          <div className="bg-white">
            <SectionTitle
              feature="Workplace"
              title="Best place to work & Grow"
              description="We care deeply about building the company we want to work at. We believe that our culture is shaped by every member of the team. If you join us, you'll have the opportunity to shape how we work and collaborate."
            />
            <p className="text-center text-base text-gray-600 tracking-wider">Benefits</p>
            <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 my-4 max-w-5xl mx-auto">
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <GiftIcon className="w-6 h-6 inline" />
                <p className="mt-3">Competitive salary and equity</p>
              </div>
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <GlobeIcon className="w-6 h-6 inline" />
                <p className="mt-3">Remote work with flexible hours</p>
              </div>
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <HeartIcon className="w-6 h-6 inline" />
                <p className="mt-3">Generous parental leave</p>
              </div>
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <HandIcon className="w-6 h-6 inline" />
                <p className="mt-3">Company retreats</p>
              </div>
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <LinkIcon className="w-6 h-6 inline" />
                <p className="mt-3">Mentorship from our network</p>
              </div>
              <div className="col-span-1 text-center py-4 px-4 bg-indigo-50 text-gray-700">
                <GiftIcon className="w-6 h-6 inline" />
                <p className="mt-3">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default career;
