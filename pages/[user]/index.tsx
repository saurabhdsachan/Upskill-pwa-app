import { Hero1 } from '@components/Hero';
import HeroGem from '@components/HeroGem';
import Avatar from '@components/Shared/Avatar';
import HeroIntro from '@components/Shared/HeroIntro';
import Layout from '@components/Shared/Layout';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import SocialLinks from '@components/Shared/SocialLinks';
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
import Link from 'next/link';
import React from 'react';

export const User = (): JSX.Element => {
  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Header />
        <Layout.Body>
          <div className="px-6 pb-6 text-center bg-white">
            <Hero1 />
            <Avatar />
            <HeroIntro />
            <HeroGem />
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
            <SocialLinks />
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
            <Link href="/chef-jordan/connect-me">
              <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                <TicketIcon className="h-4 w-4 mr-2" /> Book 1:1 Demo Session
              </a>
            </Link>
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
        <Layout.PreFooter />
        <Layout.Footer />
      </Layout>
    </>
  );
};

export default React.memo(User);
