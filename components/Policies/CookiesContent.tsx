import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const CookiesContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 antialiased">
      <SectionTitle
        title="Cookie Statement"
        description="Spacejoy uses cookies to enhance performance and improve your user experience, to provide certain user
              functionality, as well as to distinguish you from other users when you use our website and other products
              and services."
        feature={`Last Updated: Jan 02nd, ${currentYear}`}
      />
      <div className="absolute top-0 right-0 max-w-prose mx-auto" aria-hidden="true">
        <svg width={404} height={384} fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
      </div>
      <div className="relative sm:px-6 lg:px-8">
        <div>
          <h2 className="text-lg mb-2">What is a cookie?</h2>
          <p className="text-base text-gray-500">
            A cookie is a small file that is stored locally within the web browser or file system on your computer or
            mobile device. Cookies are used by all websites, and have several different functions. We use the following
            types of cookies:
          </p>
        </div>
        <hr className="my-4 border-dashed border-gray-200 border-t-1" />
        <div className="flex">
          <div className="flex-1 pr-12">
            <div className="my-4">
              <h2 className="text-lg mb-2">Functionality cookies</h2>
              <p className="text-base text-gray-500">
                These are cookies that are required for the operation of our services. They include, for example,
                cookies that enable you to log into secure areas of our website and access information.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-lg mb-2">Analytics Cookies</h2>
              <p className="text-base text-gray-500">
                These cookies are important for our website to get statistics, estimate audience size, gain insight into
                the use of our website and to help improve the services we provide to our users. You can find more
                information about the individual cookies we use and the purposes for which we use them in the table
                below:
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="my-4">
              <h2 className="text-lg mb-2">Third Parties Cookies</h2>
              <p className="text-base text-gray-500">
                Third Parties We also work with third parties that provide services we use for promoting and maintaining
                our services. Some of these allow us to test and ensure that our services are performing well. Others
                measure the impact and performance of our advertising, or allow us to track referrals from our
                affiliates. Please read our partner&apos;s privacy policies (linked below) to ensure that you&apos;re
                comfortable with how they use cookies. We have also provided links to opt out of their services if you
                like and wherever applicable on about the individual cookies we use and the purposes for which we use
                them in the table below:
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4 border-dashed border-gray-200 border-t-1" />
        <div className="my-4">
          <h2 className="text-lg mb-2">Double Click</h2>
          <p className="text-base text-gray-500">
            Overflow uses Google DoubleClick to measure the effectiveness of its online marketing campaigns. <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://policies.google.com/technologies/ads"
              target="_blank"
            >
              How Google uses cookies in advertising
            </a>
            <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://support.google.com/ads/answer/7395996"
              target="_blank"
            >
              Opt-out of Double-click cookies
            </a>
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-lg mb-2">Facebook</h2>
          <p className="text-base text-gray-500">
            Facebook provides certain site functionality, help us to place advertising on Facebook, and help us to track
            the performance of advertisements that we place on Facebook. <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://policies.google.com/technologies/ads"
              target="_blank"
            >
              How Google uses cookies in advertising
            </a>
            <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://support.google.com/ads/answer/7395996"
              target="_blank"
            >
              Opt-out of Double-click cookies
            </a>
            <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://policies.google.com/privacy"
              target="_blank"
            >
              Google Privacy Policy
            </a>
            <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://tools.google.com/dlpage/gaoptout?hl=e"
              target="_blank"
            >
              How to Opt-out
            </a>
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-lg mb-2">Google Analytics</h2>
          <p className="text-base text-gray-500">
            From time to time services, including mobile apps, use Google Analytics. This is a web analytics service
            provided by Google, Inc. Google Analytics sets a cookie in order to evaluate use of those services and
            compile a report for us. <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://policies.google.com/privacy"
              target="_blank"
            >
              Google Privacy Policy
            </a>
            <br />
            <a
              className="text-red-400 hover:underline"
              rel="noopener noreferrer"
              href="https://tools.google.com/dlpage/gaoptout?hl=e"
              target="_blank"
            >
              How to Opt-out
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesContent;
