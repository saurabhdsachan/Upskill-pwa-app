import { useAuthStore } from '@context/authContext';
import { observer } from 'mobx-react';
import ReactGA from 'react-ga4';

const prod = process.env.NODE_ENV === 'production';

interface ILogEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

enum EVENT_NAME {
  CLICK = 'click',
  LANDINGPAGE = 'landing-page',
  ROUTECHANGE = 'route-change',
  PWAINSTALLED = 'pwa-installed',
  PAGEVIEW = 'pageview',
}

const useAnalytics = observer(() => {
  const { authData } = useAuthStore();

  const InitAnalytics = () => {
    // @ts-ignore
    if (gaEnabled && !window?.GA_INITIALIZED) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GA4_PROP_ID, { testMode: !prod });
      // @ts-ignore
      window.GA_INITIALIZED = true;
    }
  };

  const logPageView = (data) => {
    ReactGA.send({ hitType: EVENT_NAME.PAGEVIEW, page: data });
  };

  const dataLayerPush = (data, type) => {
    // @ts-ignore
    window.dataLayer.push({ data, ...{ event: type } });
  };

  const logEvent = ({ category = '', action = '', label = '', value = 0 }: ILogEvent) => {
    if (category && action) {
      ReactGA.event({
        category,
        action,
        label, // optional
        value: typeof value === 'number' ? value : parseInt(value, 10), // optional, must be a number
        nonInteraction: true, // optional, true/false
        transport: 'xhr', // optional, beacon/xhr/image
      });
    }
  };

  const PushEvent = (data) => {
    const { category, action, label, value } = data;
    const categoryName = `pwa>>${category}=>${window.location.pathname} >> `;
    const labelName = `${label} | user Name - ${'Saurabh' || 'Guest'}`;
    dataLayerPush({ category: categoryName, action, label: labelName, value }, EVENT_NAME.CLICK);
    logEvent({ category: categoryName, action, label: labelName, value });
  };

  const LandingPage = (data) => {
    dataLayerPush(data, EVENT_NAME.LANDINGPAGE);
    logPageView(data);
  };

  const RouteChange = (data) => {
    dataLayerPush(data, EVENT_NAME.ROUTECHANGE);
    logPageView(data);
  };

  const PwaInstalled = (data) => {
    dataLayerPush(data, EVENT_NAME.PWAINSTALLED);
  };

  return { PushEvent, LandingPage, RouteChange, PwaInstalled, InitAnalytics };
});

export default useAnalytics;
