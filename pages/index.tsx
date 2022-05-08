import Layout from '@components/Shared/Layout';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import {
  ChatAltIcon,
  ChevronDoubleRightIcon,
  StarIcon,
  TicketIcon,
  TranslateIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import Image from 'next/image';
import React from 'react';

export const Home = (): JSX.Element => {
  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Header />
        <Layout.Body>
          <div className="px-6 pb-6 text-center bg-white">
            <div>
              <Image
                className="object-cover rounded-xl shadow-xl"
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600"
                alt="Chef Jordan"
                width={500}
                height={250}
              />
              <div className="relative mx-auto -mt-12">
                <Image
                  className="object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=240"
                  alt="Chef Jordan"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="my-4">
              <p className="">Chef Jordan</p>
              <small className="text-slate-400 text-sm">Career Coach, Advisor, Chef</small>
            </div>
            <div className="flex my-6">
              <div className="flex-1 text-center border-r border-slate-300">
                <p className="text-lg font-bold text-slate-900">46</p>
                <p className="text-xs text-slate-400">Followers</p>
              </div>
              <div className="flex-1 text-center border-r border-slate-300">
                <p className="text-lg font-bold text-slate-900">105</p>
                <p className="text-xs text-slate-400">Following</p>
              </div>
              <div className="flex-1 text-center border-r border-transparent">
                <p className="text-lg font-bold text-slate-900">25</p>
                <p className="text-xs text-slate-400">Sessions</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <button className="inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-400 shadow-sm shadow-blue-500/50">
                  <UserGroupIcon className="h-4 w-4 mr-2" /> Follow
                </button>
              </div>
              <div className="flex-1">
                <button className="inline-flex items-center justify-center w-full py-3 border border-slate-400 rounded-xl text-sm font-medium text-slate-900 bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 shadow-sm shadow-white-500/50">
                  <ChatAltIcon className="h-4 w-4 mr-2" /> Chat
                </button>
              </div>
            </div>
            <div className="my-6 justify-center flex space-x-3">
              <a
                href="https://www.facebook.com/spacejoyapp/"
                className="text-slate-800 bg-slate-100 p-2 hover:text-blue-800 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/spacejoyapp/"
                className="text-slate-800 bg-slate-100 p-2 hover:text-red-500 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32zm28 130.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/spacejoyapp/"
                className="text-slate-800 bg-slate-100 p-2 hover:text-blue-400 focus:ring-1 focus:ring-slate-500 focus:outline-none rounded-xl"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-700">
                Hey there 👋🏻 I am from Pep team and you can book a 1:1 session with me to know more about Pep 🤓
              </p>
            </div>
            <div className="flex mt-6 space-x-6 justify-center">
              <div className="flex items-center justify-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-full">
                  <StarIcon className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-left">
                  <small className="text-xs  text-blue-500 block">Rating</small>
                  <span className="text-xs">5.0 (1)</span>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-full">
                  <TranslateIcon className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-left">
                  <small className="text-xs text-blue-500 block">Language</small>
                  <span className="text-xs">Hindi, English</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b px-6 py-4 border-slate-200 sticky bottom-0 bg-white">
            <button className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
              <TicketIcon className="h-4 w-4 mr-2" /> Book 1:1 Demo Session
            </button>
          </div>

          <div className="px-6 py-4">
            <div className="flex">
              <div className="flex-grow">
                <h3>1:1 Consultation</h3>
              </div>
              <div>
                <small className="text-xs text-slate-600">
                  See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                </small>
              </div>
            </div>
          </div>
          <div className="relative overflow-auto">
            <div className="mx-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-6 mx-6" />
          <div className="px-6 py-4">
            <div className="flex">
              <div className="flex-grow">
                <h3>Courses</h3>
              </div>
              <div>
                <small className="text-xs text-slate-600">
                  See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                </small>
              </div>
            </div>
          </div>
          <div className="relative overflow-auto">
            <div className="mx-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1598714673521-98d539a175f4?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1629743699116-5eb5258c76cb?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-6 mx-6" />
          <div className="px-6 py-4">
            <div className="flex">
              <div className="flex-grow">
                <h3>Workshops</h3>
              </div>
              <div>
                <small className="text-xs text-slate-600">
                  See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                </small>
              </div>
            </div>
          </div>
          <div className="relative overflow-auto">
            <div className="mx-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1622319977720-9949ac28adc4?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1614108830714-74f0e4c8cd7e?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1624976978579-f2653f7b4fe0?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none px-3 first:pl-6 last:pr-6">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-full rounded-xl shadow-lg">
                      <Image
                        className="rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=320"
                        alt="Chef Jordan"
                        height={'80'}
                        width={'80'}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm mt-2 mb-1">Cooking with Saurabh</h4>
                      <p className="text-slate-600 text-xs">May 15, 2020</p>
                      <p className="text-slate-600 text-xs">5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout.Body>
        <Layout.Footer />
      </Layout>
    </>
  );
};

export default React.memo(Home);
