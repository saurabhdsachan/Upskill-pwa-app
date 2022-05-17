const HomePageBaseSEO = {
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
  url: 'https://www.pep.live',
};
const additionalLinkTags = [
  {
    key: 'canonical',
    rel: 'canonical',
    href: 'https://www.pep.live',
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
