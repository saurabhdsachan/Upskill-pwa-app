import ExpertiseCard from '@components/Cards/ExpertiseCard';
import WorkshopCard from '@components/Cards/WorkshopCard';
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
import { UnsplashData } from '@mocks/Unsplash';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import Link from 'next/link';
import React from 'react';
import CourseCard from '../../components/Cards/CourseCard';

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

          <section>
            <div className="px-6 py-4">
              <div className="flex">
                <div className="flex-1">
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
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(0, 8).map((item) => (
                  <ExpertiseCard key={item.imageThumbnail} src={item.imageThumbnail} />
                ))}
              </div>
            </div>
          </section>
          <hr className="mt-10 mb-4 mx-6" />
          <section>
            <div className="px-6 py-4">
              <div className="flex">
                <div className="flex-1">
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
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(8, 14).map((item) => (
                  <WorkshopCard key={item.imageThumbnail} src={item.imageThumbnail} />
                ))}
              </div>
            </div>
          </section>
          <hr className="mt-10 mb-4 mx-6" />
          <section>
            <div className="px-6 py-4">
              <div className="flex">
                <div className="flex-1">
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
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(14, 20).map((item) => (
                  <CourseCard key={item.imageThumbnail} src={item.imageThumbnail} />
                ))}
              </div>
            </div>
          </section>
        </Layout.Body>
        <Layout.PreFooter />
        <Layout.Footer />
      </Layout>
    </>
  );
};

export default React.memo(User);
