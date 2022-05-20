import CourseCard from '@components/Cards/CourseCard';
import Layout from '@components/Shared/Layout';
import { UnsplashData } from '@mocks/Unsplash';
import Head from 'next/head';
import React from 'react';

const Listing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Workshops | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Workshops" />
      <Layout.Body>
        <div className="bg-white min-h-free">
          <div className="px-6 grid gap-6 grid-cols-2 mb-10">
            {UnsplashData.slice(14, 20).map((item) => (
              <CourseCard key={item.imageThumbnail} src={item.imageThumbnail} type="v-card" />
            ))}
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Listing;
