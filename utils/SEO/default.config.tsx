import { company, page, cloudinary } from '@utils/config';

const prod = process.env.NEXT_PUBLIC_ENV_HOST === 'production';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spacejoy',
  brand: 'Spacejoy',
  legalName: 'Neo Design Labs Inc',
  url: 'https://www.spacejoy.com/',
  logo: '//res.cloudinary.com/spacejoy/image/upload/w_200/v1578101355/shared/spacejoy-logo_ase39m.svg',
  foundingDate: '22/04/2019',
  founders: [
    {
      '@type': 'Person',
      name: 'Arnab Saharoy',
    },
    {
      '@type': 'Person',
      name: 'Vinay Indresh',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1450 2nd Street',
    addressLocality: '155 Santa Monica',
    addressRegion: 'LA California',
    postalCode: '90401',
    addressCountry: 'USA',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+1 (310) 483-7722',
      email: 'hello@spacejoy.com',
    },
  ],
  sameAs: [
    'https://www.facebook.com/spacejoyapp/',
    'https://twitter.com/spacejoyapp/',
    'https://www.linkedin.com/company/spacejoy/',
    'https://www.instagram.com/spacejoyapp/',
    'https://www.pinterest.com/spacejoyapp/',
  ],
};

const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: 'https://www.spacejoy.com/',
  title: `${company.product} - ${company.tagLine}`,
  description: company.description,
  images: [
    {
      url: `${cloudinary.baseDeliveryURL}/image/upload/w_200/v1578101355/shared/spacejoy-logo_ase39m.svg`,
      width: 118,
      height: 25,
      alt: 'Spacejoy',
    },
  ],
  site_name: company?.url,
};
const twitter = {
  handle: company?.social?.handles?.twitter,
  site: company?.social?.handles?.twitter,
  cardType: 'summary_large_image',
  content: 'Spacejoy - the best place to shop and design for your home',
};

const facebook = {
  appId: page?.facebookAppId,
};

//// Meta section
const AppleMeta = [
  { key: 'appleMobileWebCapable', name: 'apple-mobile-web-app-capable', content: 'yes' },
  { key: 'appleTouchFullScreen', content: 'yes', name: 'apple-touch-fullscreen' },
  { key: 'appleStatusBar', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { key: 'formatDetection', name: 'format-detection', content: 'telephone=no' },
];

const IEMeta = [
  { key: 'msapplicationStartUrl', name: 'msapplication-starturl', content: '/' },
  { key: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
  { key: 'msapplicationLogo', name: 'msapplication-square310x310logo', content: '/logo-icons/ms-icon-310x310.png' },
  { key: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/logo-icons/ms-icon-144x144.png' },
];

const additionalMetaTags = [
  { key: 'language', name: 'language', content: 'ES' },
  { key: 'subject', name: 'subject', content: company.subject },
  { key: 'url', name: 'url', content: company.url },
  { key: 'identifierURL', name: 'identifier-URL', content: company.url },
  { key: 'category', name: 'category', content: 'Home Decor, Space, Interior' },
  { key: 'coverage', name: 'coverage', content: 'Worldwide' },
  { key: 'mobileWebCapable', name: 'mobile-web-app-capable', content: 'yes' },
  { key: 'themeColor', name: 'theme-color', content: '#ffffff' },
  { key: 'googleSiteVerification', name: 'google-site-verification', content: page.googleSiteVerification },
  { key: 'sourceOrganization', name: 'sourceOrganization', content: company.product },
  { key: 'robots', name: 'robots', content: prod ? 'index,follow' : 'noindex,nofollow' },
  { key: 'topic', name: 'topic', content: company.subject },
  { key: 'summary', name: 'summary', content: company.description },
  ...AppleMeta,
  ...IEMeta,
];

// // Link Section
const AppleLink = [
  { key: 'apple-touch-icon1', rel: 'apple-touch-icon', href: '/logo-icons/apple-icon.png' },
  { key: 'apple-touch-icon2', rel: 'apple-touch-icon', sizes: '72x72', href: '/logo-icons/apple-icon-72x72.png' },
  { key: 'apple-touch-icon3', rel: 'apple-touch-icon', sizes: '114x114', href: '/logo-icons/apple-icon-114x114.png' },
];

const additionalLinkTags = [
  { key: 'apple-touch-icon-57', rel: 'apple-touch-icon', sizes: '57x57', href: '/logo-icons/apple-icon-57x57.png' },
  { key: 'apple-touch-icon-60', rel: 'apple-touch-icon', sizes: '60x60', href: '/logo-icons/apple-icon-60x60.png' },
  { key: 'apple-touch-icon-72', rel: 'apple-touch-icon', sizes: '72x72', href: '/logo-icons/apple-icon-72x72.png' },
  { key: 'apple-touch-icon-76', rel: 'apple-touch-icon', sizes: '76x76', href: '/logo-icons/apple-icon-76x76.png' },
  {
    key: 'apple-touch-icon-114',
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/logo-icons/apple-icon-114x114.png',
  },
  {
    key: 'apple-touch-icon-120',
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/logo-icons/apple-icon-120x120.png',
  },
  {
    key: 'apple-touch-icon-144',
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/logo-icons/apple-icon-144x144.png',
  },
  {
    key: 'apple-touch-icon-152',
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/logo-icons/apple-icon-152x152.png',
  },
  {
    key: 'apple-touch-icon-180',
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/logo-icons/apple-icon-180x180.png',
  },
  { key: 'icon-192', rel: 'icon', type: 'image/png', sizes: '192x192', href: '/logo-icons/android-icon-192x192.png' },
  { key: 'icon-32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-icons/favicon-32x32.png' },
  { key: 'icon-96', rel: 'icon', type: 'image/png', sizes: '96x96', href: '/logo-icons/favicon-96x96.png' },
  { key: 'icon-16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-icons/favicon-16x16.png' },
  ...AppleLink,
];

const additionRobotsProps = {};

const defaultSEO = {
  openGraph,
  twitter,
  title: 'Spacejoy',
  additionalMetaTags,
  additionalLinkTags,
  facebook,
  additionRobotsProps,
};

export default { defaultSEO, organizationSchema, twitter };
