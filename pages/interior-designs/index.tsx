import CollectionList from '@components/Collection/InjectCollectionList';
import DesignList from '@components/InteriorDesigns/DesignList';
import ListFilter from '@components/InteriorDesigns/ListFilter';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants';
import fetcher from '@utils/fetcher';
import topCollections from '@utils/Mocks/topCollections';
import Head from 'next/head';
import React from 'react';

const InteriorDesigns = ({ designFeedData }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Interior-Designs | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CollectionList feedData={topCollections} />
        <ListFilter />
        <DesignList feedData={designFeedData} />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  try {
    const additionalParams = `?limit=${internalPages.InteriorDesigns.DEFAULT_PAGE_SIZE}&skip=0`;
    const designRes = await fetcher({
      endPoint: `${publicRoutes.designFeed}${additionalParams}`,
      method: 'POST',
      body: { data: {} },
    });
    const { data: { list: designList = [] } = {}, statusCode } = designRes;
    if (statusCode <= 301) {
      return {
        props: {
          designFeedData: { list: designList, count: 500 },
        },
        revalidate: 1, //TODO: Recheck the doc Data Fetching
      };
    } else {
      throw new Error(statusCode);
    }
  } catch (e) {
    return {
      props: {
        error: e.message || 'Something went wrong',
      },
      revalidate: 1, //TODO: Recheck the doc Data Fetching
    };
  }
};

export default React.memo(InteriorDesigns);
