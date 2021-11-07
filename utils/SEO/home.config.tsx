const HomePageBaseSEO = {
  title: '#1 Automated Interior Design Solution by Spacejoy',
  description: 'The best place to design and shop for your home',
  additionalMetaTags: '',
  canonical: '',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};
const openGraph = {
  type: 'website',
  locale: 'en_IE',
  url: 'https://www.spacejoy.com/',
};
const additionalLinkTags = [
  {
    key: 'canonical',
    rel: 'canonical',
    href: 'https://www.spacejoy.com',
  },
];
const robotsProps = {
  nosnippet: true,
  notranslate: true,
  noimageindex: true,
  noarchive: true,
  maxSnippet: -1,
  maxImagePreview: 'none',
  maxVideoPreview: -1,
};

const HomeSEO = { ...HomePageBaseSEO, openGraph, additionalLinkTags, robotsProps };

export default { HomeSEO };
