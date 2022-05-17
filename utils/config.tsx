const isProduction = process.env.NEXT_PUBLIC_ENV_HOST === 'production';

const page = {
  appName: 'pep-pwa',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_GATEWAY,
  apiSocketUrl: '',
  placeKey: '',
  googleSiteVerification: '',
  googleAPIKey: '',
  googleClientId: '',
  appleClientId: '',
  googleClientSecret: '',
  ga: '',
  gtm: '',
  optimize: '',
  stripe: '',
  freshchatToken: '',
  CLEVERTAP_ACCOUNT_ID: '',
  playStoreUrl: '',
  playStoreId: '',
  appStoreUrl: '',
  appStoreId: '',
  facebookPageId: '',
  facebookAppId: '',
  pinterestAppId: '',
  whatsAppShareBaseUrl: 'https://api.whatsapp.com/send',
};
const cloudinary = {
  cloudName: 'pep',
  apiKey: '',
  apiSecret: '',
  environmentVariable: '',
  baseDeliveryURL: '',
  apiBaseURL: '',
};

const company = {
  logo: 'w_200/v1578101355/shared/Pep-logo_ase39m.svg',
  name: 'pep',
  product: 'Pep',
  productWithTM: 'Pep™',
  tagLine: 'Designing your imagination',
  url: '//Pep.com',
  country: 'us',
  subject: 'Design your room online. Pep, online home interior design software ',
  description:
    'Get online home interior designs in 3D of your living room, bedroom, home office room, dining room, nursery & kids room',
  Keywords: [
    '3d home design',
    'online interior design',
    'room design',
    'interior designers',
    'home decor',
    'interior design software',
    'home design app',
    'living room design',
    'bedroom design',
    'dining room design',
    'kids room design',
    'nursery design',
    'home interior design app',
    'Living room design ideas',
    'Bedroom design ideas',
    'Interior Design Ideas',
    'Small Apartment Design Ideas',
  ],
  email: {
    support: 'hello@Pep.com',
    connect: '',
  },
  phone: {
    support: '+1 (310) 483-7722',
    connect: '',
  },
  address: [
    {
      location1: '1450 2nd Street',
      location2: '155 Santa Monica',
      city: 'LA',
      state: 'California',
      country: 'USA',
      pin: '90401',
      latitude: '',
      longitude: '',
      plusCode: '2G73+GH Santa Monica, California, USA',
    },
  ],
  social: {
    sites: {
      facebook: 'https://www.facebook.com/Pepapp/',
      linkedin: 'https://www.linkedin.com/company/Pep/',
      twitter: 'https://twitter.com/Pepapp/',
      instagram: 'https://www.instagram.com/Pepapp/',
      pinterest: 'https://in.pinterest.com/Pepapp/',
    },
    handles: {
      twitter: '@Pepapp',
    },
  },
  app: {
    android: 'https://play.google.com/store/apps/details?id=com.homefuly.idsuite.retail',
    ios: 'https://apps.apple.com/us/app/Pep-home-design-makeover/id1484078338',
    mac: 'https://apps.apple.com/us/app/Pep/id1489951014',
    windows: 'https://www.microsoft.com/en-us/p/Pep/9n954dnxj4zx',
    appStore: 'https://apps.apple.com/in/app/home-design-makeover-Pep/id1562072588',
  },
};

const internalPages = {
  InteriorDesigns: {
    DEFAULT_PAGE_SIZE: 18,
    DEFAULT_PAGINATION_BUTTON_COUNT: 5,
  },
  Collection: {
    DEFAULT_PAGE_SIZE_BANNER: 6,
    DEFAULT_PAGE_SIZE: 24,
  },
  Shop: {
    DEFAULT_PAGE_SIZE: 36,
    NUM_OF_BUTTONS: 7,
  },
};

export { company, page, cloudinary, internalPages };
