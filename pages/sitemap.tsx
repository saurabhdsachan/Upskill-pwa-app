import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SiteMapData from '@utils/Mocks/siteMapConfig';
import Link from 'next/link';
import React from 'react';

const getExternalLinks = () => {
  return (
    <>
      <li>
        <a
          className="hover:underline"
          href="https://www.blog.spacejoy.com/statement-ceiling-ideas-for-your-home/"
          target="_blank"
          rel="noreferrer"
        >
          Ceiling Decoration Ideas
        </a>
      </li>
      <li>
        <a
          className="hover:underline"
          href="https://www.blog.spacejoy.com/lighting-ideas-for-your-home/"
          target="_blank"
          rel="noreferrer"
        >
          Lighting Ideas For Your Home
        </a>
      </li>
    </>
  );
};

const SiteMap: React.FC = () => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container relative py-16 mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {SiteMapData.data.map((item, index) => (
              <div key={item?.title} className="py-4">
                <h3 className="text-lg">
                  <Link href={item.href} as={item.as}>
                    <a className="text-gray-700 hover:text-red-500 block pb-2">{item.title}</a>
                  </Link>
                </h3>
                <ul>
                  {item.links.map((link) => (
                    <li key={`${link?.as}-${link?.title}`}>
                      <Link href={link?.href} as={link?.as}>
                        <a className="text-gray-700 hover:text-red-500 block pb-1 text-sm">{link?.title}</a>
                      </Link>
                    </li>
                  ))}
                  {index === 6 ? getExternalLinks() : null}
                </ul>
              </div>
            ))}
          </div>
          <ul className="flex">
            <li>
              <Link href="/" as="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/interior-designs" as="/interior-designs">
                <a className="hover:underline">Interior Designs</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/pricing" as="/pricing">
                <a className="hover:underline">Pricing</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/help" as="/help">
                <a className="hover:underline">Help</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/terms" as="/terms">
                <a className="hover:underline">Terms</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/cookies" as="/cookies">
                <a className="hover:underline">Cookies</a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/refund-policy" as="/refund-policy">
                <a className="hover:underline">Refund Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default SiteMap;
