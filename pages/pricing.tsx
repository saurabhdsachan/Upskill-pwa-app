import Packages from '@components/Pricing/Packages';
import { PricingData } from '@components/Pricing/PricingTypes';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import { company } from '@utils/config';
import { publicRoutes } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { PricingPageSEO } from '@utils/SEO';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import PackagesAdvantages from '../components/Pricing/PackagesAdvantages';

const DynamicMindBlowingWithNoSSR = dynamic(() => import('@components/Pricing/MindBlowing'), { ssr: false });

export const pricing = ({ pricingData }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const seoTitle = `Online Interior Design Packages Starting at ${pricingData[0]?.price?.value} on ${company.product} | Start a Project`;
  const seoObject = {
    ...PricingPageSEO.PricingSEO,
    title: seoTitle,
    openGraph: {
      ...PricingPageSEO.PricingSEO.openGraph,
      title: seoTitle,
    },
  };

  return (
    <>
      <SEOWrapper seoProps={seoObject} />
      <Layout>
        <Layout.Banner />
        <Layout.Header />
        <Layout.Body>
          <DynamicMindBlowingWithNoSSR />
          <Packages pricingData={pricingData} />
          <PackagesAdvantages />
          <PreFooter />
        </Layout.Body>
        <Layout.Footer />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetcher({ endPoint: publicRoutes.pricingRoute, method: 'GET' });
  const {
    data: { list = [] },
  } = res;
  const pricingData: PricingData[] = list.map((item) => {
    return {
      features: item?.includedFeatures,
      price: item?.salePrice,
      name: item?.slug,
      description: item?.description,
    };
  });

  return {
    props: {
      pricingData,
    },
    revalidate: 10,
  };
};

export default pricing;
