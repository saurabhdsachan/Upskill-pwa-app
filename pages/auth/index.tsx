import Layout from '@components/Shared/Layout';
import Head from 'next/head';
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
          <h1 className="text-4xl mb-2 text-slate-900 leading-10">
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
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-xl"
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
                  className="py-3 px-4 block w-full pl-28 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-xl"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default index;
