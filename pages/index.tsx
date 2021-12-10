import { Advantage, ChooseUs, Hero1, Testimonials } from '@components/Home';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import { fetchAllFilters } from '@utils/shop/helpers';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicProcessWithNoSSR = dynamic(() => import('@components/Home/Process'), { ssr: false });
const DynamicTeamWithNoSSR = dynamic(() => import('@components/Home/Team'), { ssr: false });
const DynamicFeaturedWithNoSSR = dynamic(() => import('@components/Home/Featured'), { ssr: false });
const DynamicOutputWithNoSSR = dynamic(() => import('@components/Home/Output'), { ssr: false });

export const Home = ({ shopFilters }): JSX.Element => {
  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Banner />
        <Layout.Header />
        <Layout.Body>
          <Hero1 />
          <DynamicProcessWithNoSSR />
          <ChooseUs />
          <DynamicTeamWithNoSSR />
          <Testimonials />
          <Advantage />
          <DynamicOutputWithNoSSR />
          <DynamicFeaturedWithNoSSR />
          <PreFooter />
        </Layout.Body>
        <Layout.Footer />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx) {
  try {
    const shopFilters = await fetchAllFilters(ctx);
    return {
      props: { shopFilters }, // will be passed to the page component as props
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default React.memo(Home);
