import ExpertiseCard from '@components/Cards/ExpertiseCard';
import WorkshopCard from '@components/Cards/WorkshopCard';
import { Hero1 } from '@components/Hero';
import HeroAction from '@components/HeroAction';
import HeroGem from '@components/HeroGem';
import Avatar from '@components/Shared/Avatar';
import HeroIntro from '@components/Shared/HeroIntro';
import Layout from '@components/Shared/Layout';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import SocialLinks from '@components/Shared/SocialLinks';
import { ChevronDoubleRightIcon, StarIcon, TicketIcon, TranslateIcon } from '@heroicons/react/outline';
import { UnsplashData } from '@mocks/Unsplash';
import fetcher from '@utils/fetcher';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import CourseCard from '../../components/Cards/CourseCard';

const User: React.FC<any> = ({ profileData }) => {
  console.log('profileData', profileData);

  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Header backflow={false} title={profileData?.user?.name} />
        <Layout.Body>
          <div className="px-6 pb-6 text-center bg-white">
            <Hero1 />
            <Avatar source={profileData?.user?.profileImgUrl} />
            <HeroIntro name={profileData?.user?.name} username={profileData?.user?.username} />
            <HeroGem
              followersCount={profileData?.user?.followersCount}
              followingCount={profileData?.user?.followingCount}
              sessionsTaken={profileData?.user?.sessionsTaken}
            />
            <HeroAction />
            <SocialLinks
              twitter={profileData?.user?.twitter}
              facebook={profileData?.user?.fbUrl}
              instagram={profileData?.user?.instaUrl}
            />
            {profileData?.user?.description && (
              <p className="text-sm text-slate-700">{profileData?.user?.description}</p>
            )}
            <div className="flex mt-6 space-x-6 justify-center">
              <Link href="/chef-jordan/reviews">
                <a>
                  <div className="flex items-center justify-start space-x-2">
                    <div className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-full">
                      <StarIcon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <small className="text-xs  text-blue-500 block">Rating</small>
                      <span className="text-xs">
                        {profileData?.rating?.averageRating} ({profileData?.rating?.ratingCount})
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="flex items-center justify-start space-x-2">
                <div className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-full">
                  <TranslateIcon className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-left">
                  <small className="text-xs text-blue-500 block">Language</small>
                  <span className="text-xs">{profileData?.user?.preferredLanguages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b px-6 py-4 border-slate-200 bg-white">
            <Link href="/chef-jordan/workshops/book/learn-cooking-in-5-days/slots">
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
                  <Link href="/chef-jordan/workshops">
                    <a>
                      <small className="text-xs text-slate-600">
                        See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                      </small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative overflow-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(0, 8).map((item) => (
                  <ExpertiseCard key={item.imageThumbnail} src={item.imageThumbnail} type="h-card" />
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
                  <Link href="/chef-jordan/workshops">
                    <a>
                      <small className="text-xs text-slate-600">
                        See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                      </small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative overflow-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(8, 14).map((item) => (
                  <WorkshopCard key={item.imageThumbnail} src={item.imageThumbnail} type="h-card" />
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
                  <Link href="/chef-jordan/workshops">
                    <a>
                      <small className="text-xs text-slate-600">
                        See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                      </small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative overflow-auto">
              <div className="overflow-x-auto flex no-scrollbar">
                {UnsplashData.slice(14, 20).map((item) => (
                  <CourseCard key={item.imageThumbnail} src={item.imageThumbnail} type="h-card" />
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

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { user: 'saurabh' } }, { params: { user: 'viveksharma' } }], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params: { user } }) => {
  const endpoint = `/store/v1/user/details/others?username=${user}`;
  const res = await fetcher(endpoint, {});

  return {
    props: {
      profileData: res?.data,
    },
  };
};

export default React.memo(User);
