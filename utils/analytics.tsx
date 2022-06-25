/**
ReactGA.event({
  category: 'Promotion',
  action: 'Displayed Promotional Widget',
  label: 'Homepage Thing',
  nonInteraction: true
});
[args.category]	String. Required. A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.
[args.action]	String. Required. A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account', etc.
[args.label]	String. Optional. More precise labelling of the related action. E.g. alongside the 'Added a component' action, we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
[args.value]	Int. Optional. A means of recording a numerical value against an event. E.g. a rating, a score, etc.
[args.nonInteraction]	Boolean. Optional. If an event is not triggered by a user interaction, but instead by our code (e.g. on page load, it should be flagged as a nonInteraction event to avoid skewing bounce rate data.
[args.transport]	String. Optional. This specifies the transport mechanism with which hits will be sent. Valid values include 'beacon', 'xhr', or 'image'.
 */

import ReactGA from 'react-ga4';

const gaEnabled = process.env.NEXT_PUBLIC_GA_ENABLE;

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

const initAnalytics = () => {
  // @ts-ignore
  if (gaEnabled && !window?.GA_INITIALIZED) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GA4_PROP_ID);
    // @ts-ignore
    window.GA_INITIALIZED = true;
  }
};

const dataToPush = (data, type) => {
  // @ts-ignore
  window.dataLayer.push({ data, ...{ event: type } });
};

const logPageView = (data) => {
  ReactGA.send({ hitType: EVENT_NAME.PAGEVIEW, page: data });
};

const logEvent = ({ category = '', action = '', label = '', value = 0 }: ILogEvent) => {
  if (gaEnabled && category && action) {
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

const PushEvent = async (data) => {
  const { category, action, label, value } = data;
  const categoryName = `pwa>>${category}=>${window.location.pathname} >> `;
  const labelName = `${label} | user Name - ${'Saurabh' || 'Guest'}`;
  dataToPush({ category: categoryName, action, label: labelName, value }, EVENT_NAME.CLICK);
  logEvent({ category: categoryName, action, label: labelName, value });
};

const LandingPage = (data) => {
  dataToPush(data, EVENT_NAME.LANDINGPAGE);
  logPageView(data);
};

const RouteChange = (data) => {
  dataToPush(data, EVENT_NAME.ROUTECHANGE);
  logPageView(data);
};

const PwaInstalled = (data) => {
  dataToPush(data, EVENT_NAME.PWAINSTALLED);
};

export { PushEvent, LandingPage, RouteChange, PwaInstalled, initAnalytics };
