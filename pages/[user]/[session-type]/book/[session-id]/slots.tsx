import Layout from '@components/Shared/Layout';
import { TicketIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { UnsplashData } from '@mocks/Unsplash';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Slots: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Pick a slot | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Select a slot" />
      <Layout.Body>
        <div className="relative min-h-free">
          <div className="date-select">
            <div className="px-6">
              <h2 className="text-xl">Select a date</h2>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.map((item, index) => {
                  if (index === 1) {
                    return (
                      <div className="flex-none px-3 py-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                        <button className="rounded-xl border border-blue-500 bg-blue-50 p-4 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400">
                          <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                          <h4 className="leading-4 font-bold mt-3 text-blue-500">16 May 2022</h4>
                          <small className="text-xs text-blue-500">47 slots available</small>
                        </button>
                      </div>
                    );
                  } else {
                    return (
                      <div className="flex-none px-3 py-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                        <button className="rounded-xl border border-slate-200 bg-white p-4 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                          <CheckCircleIcon className="w-6 h-6 opacity-10" />
                          <h4 className="leading-4 font-bold mt-3">16 May 2022</h4>
                          <small className="text-xs text-slate-600">47 slots available</small>
                        </button>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <br />
          <div className="time-select">
            <div className="px-6 mb-4">
              <h2 className="">Pick a time</h2>
            </div>
            <div className="px-6">
              <p className="text-sm">Morning</p>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.map((item) => (
                  <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                    <button className="rounded-xl border border-slate-200 bg-white px-2 py-1 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                      <p className="text-sm text-slate-600">12:15 PM</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm">Afternoon</p>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.map((item) => (
                  <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                    <button className="rounded-xl border border-slate-200 bg-white px-2 py-1 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                      <p className="text-sm text-slate-600">12:15 PM</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm">Evening</p>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.map((item) => (
                  <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                    <button className="rounded-xl border border-slate-200 bg-white px-2 py-1 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                      <p className="text-sm text-slate-600">12:15 PM</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6">
              <p className="text-sm">Night</p>
            </div>
            <div className="relative overflow-auto my-2">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.map((item) => (
                  <div className="flex-none p-1 first:pl-6 last:pr-6" key={item.imageThumbnail}>
                    <button className="rounded-xl border border-slate-200 bg-white px-2 py-1 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400">
                      <p className="text-sm text-slate-600">12:15 PM</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 absolute w-full bottom-0 bg-white">
            <Link href="/success">
              <a className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                <TicketIcon className="h-4 w-4 mr-2" />
                Success
              </a>
            </Link>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Slots;
