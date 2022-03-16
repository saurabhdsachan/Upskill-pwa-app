import { cloudinary, company } from '@utils/config';

const PricingPageSEO = {
  description: `${company.product}'s online interior design packages are suited to fit every need and budget. Pick a package and work with one of expert designers to design your room online`,
};

const openGraph = {
  description: `${company.product}'s online interior design packages are suited to fit every need and budget. Pick a package and work with one of expert designers to design your room online`,
  url: `${company.url}/pricing`,
  images: [
    {
      height: 400,
      width: 600,
      url: `${cloudinary.baseDeliveryURL}/image/upload/c_scale,q_auto,w_600/v1593540199/web/seo/pricing_page_x3ni4v.webp`,
      alt: 'Spacejoy pricing',
    },
  ],
};
const additionalMetaTags = [
  {
    property: 'description',
    key: 'description',
    content:
      'Get your home designed online. Cheap pricing plans and packages to design your rooms by interior designers in 3D.',
  },
];
const additionalLinkTags = [
  {
    key: 'canonical',
    rel: 'canonical',
    href: 'https://www.spacejoy.com/pricing',
  },
];

const PricingSEO = { ...PricingPageSEO, openGraph, additionalLinkTags, additionalMetaTags };

export default { PricingSEO };
