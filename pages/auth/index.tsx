import Layout from '@components/Shared/Layout';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Auth | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Login" />
      <Layout.Body>
        <div className="p-8">
          <div className="fixed top-10 right-0 z-10">
            <Image
              className="object-cover rounded-full"
              src="https://res.cloudinary.com/dui8mpatf/image/upload/v1652427250/pep/Saly-38_y1ovez.png"
              alt="Chef Jordan"
              width={180}
              height={180}
              placeholder="blur"
              layout="intrinsic"
              blurDataURL={blurredBgImage}
            />
          </div>
          <h1 className="text-4xl mt-16 mb-2 text-slate-900 leading-10">
            Hey, <br />
            Login Now
          </h1>
          <p className="text-slate-600">If you are new / create one</p>
          <div className="mt-10">
            <div className="col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-xl">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-300 focus:border-slate-300 rounded-xl"
                  >
                    <option>IND +91</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-28 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-300 focus:border-slate-300 border-gray-300 rounded-xl"
                  placeholder="903608762"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="col-span-2">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <div className="mt-1">
                <input
                  id="otp"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  className="py-3 px-4 block w-full focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-300 focus:border-slate-300 border-gray-300 rounded-xl"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400">
            Send OTP <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default index;
