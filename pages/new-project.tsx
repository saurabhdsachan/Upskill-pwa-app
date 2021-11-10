import ThemeDisplay from '@components/Home/ThemeDisplay';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import React from 'react';

export const NextProject = (): JSX.Element => (
  <>
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <ThemeDisplay />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  </>
);

export default React.memo(NextProject);
