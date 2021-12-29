import React from 'react';
import { DefaultSeo, CorporateContactJsonLd } from 'next-seo';
import { CommonSEO } from '@utils/SEO';

const DefaultSEO: React.FC = () => {
  const { organizationSchema, defaultSEO } = CommonSEO;

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <CorporateContactJsonLd {...organizationSchema} />
    </>
  );
};

export default DefaultSEO;
