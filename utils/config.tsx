const isProduction = process.env.NEXT_PUBLIC_ENV_HOST === 'production';

const page = {
  appName: 'SpaceJoyWeb',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_GATEWAY,
  apiSocketUrl: isProduction ? 'https://ws-api.spacejoy.com/api' : 'https://api-staging.spacejoy.com/api',
  placeKey: 'AIzaSyDsLNNs6HOOBILlbiMfr9hn9w3_CTxPlRA',
  googleSiteVerification: 'AvMwlYBDLdgqosxOUuNf114TxPVJtkY3lm3jxDpqLMY',
  googleAPIKey: 'AIzaSyDsLNNs6HOOBILlbiMfr9hn9w3_CTxPlRA',
  googleClientId: '628064588100-islor8kv96kol2rjrocarhqs4d604vec.apps.googleusercontent.com',
  appleClientId: 'com.ndllabs.portal.webauth',
  googleClientSecret: 'dfnLUcrX1chFQ-qwTgOXkIfp',
  ga: 'UA-145327802-1',
  gtm: 'GTM-WC4HSB6',
  optimize: 'GTM-NDHKHGC',
  stripe: isProduction ? 'pk_live_74NmugK4189bLTq0H74tvVz300grMkWE5n' : 'pk_test_YSErkwOc5SzDJ2TrWBuR4VWV00au48Fd7x',
  freshchatToken: '3c8c605c-62da-4127-868d-39387867f6ec',
  CLEVERTAP_ACCOUNT_ID: '69R-KW5-465Z',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.homefuly.idsuite.retail',
  playStoreId: 'com.homefuly.idsuite.retail',
  appStoreUrl: 'https://apps.apple.com/us/app/homefuly/id1448690338',
  appStoreId: '1448690338',
  facebookPageId: '652491341906462',
  facebookAppId: '652491341906462',
  pinterestAppId: '78963155e9328e543f3c8741e7afb48c',
  whatsAppShareBaseUrl: 'https://api.whatsapp.com/send',
};
const cloudinary = {
  cloudName: 'spacejoy',
  apiKey: '432541925957862',
  apiSecret: 'dhn4tENhmmFqoefnjWXtcjlkfUw',
  environmentVariable: 'CLOUDINARY_URL=cloudinary://432541925957862:dhn4tENhmmFqoefnjWXtcjlkfUw@spacejoy',
  baseDeliveryURL: 'https://res.cloudinary.com/spacejoy',
  apiBaseURL: '//api.cloudinary.com/v1_1/spacejoy',
};

const company = {
  logo: 'w_200/v1578101355/shared/spacejoy-logo_ase39m.svg',
  name: 'Neo Design Labs Inc',
  product: 'Spacejoy',
  productWithTM: 'Spacejoy™',
  tagLine: 'Designing your imagination',
  url: '//spacejoy.com',
  country: 'us',
  subject: 'Design your room online. Spacejoy, online home interior design software ',
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
    support: 'hello@spacejoy.com',
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
      facebook: 'https://www.facebook.com/spacejoyapp/',
      linkedin: 'https://www.linkedin.com/company/spacejoy/',
      twitter: 'https://twitter.com/spacejoyapp/',
      instagram: 'https://www.instagram.com/spacejoyapp/',
      pinterest: 'https://in.pinterest.com/spacejoyapp/',
    },
    handles: {
      twitter: '@Spacejoyapp',
    },
  },
  app: {
    android: 'https://play.google.com/store/apps/details?id=com.homefuly.idsuite.retail',
    ios: 'https://apps.apple.com/us/app/spacejoy-home-design-makeover/id1484078338',
    mac: 'https://apps.apple.com/us/app/spacejoy/id1489951014',
    windows: 'https://www.microsoft.com/en-us/p/spacejoy/9n954dnxj4zx',
    appStore: 'https://apps.apple.com/in/app/home-design-makeover-spacejoy/id1562072588',
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

const affirm = {
  key: isProduction ? 'MQX1SBXQPC7ZPJNG' : 'QZMZ8RUP8KPJKAK7',
  script: isProduction ? 'https://cdn1.affirm.com/js/v2/affirm.js' : 'https://sandbox.affirm.com/js/v2/affirm.js',
};

export { company, page, cloudinary, internalPages, affirm };
