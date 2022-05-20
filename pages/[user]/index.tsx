import CourseScroll from '@components/CourseScroll';
import ExpertiseScroll from '@components/ExpertiseScroll';
import { Hero1 } from '@components/Hero';
import HeroAction from '@components/HeroAction';
import HeroGem from '@components/HeroGem';
import PlanScroll from '@components/PlanScroll';
import Avatar from '@components/Shared/Avatar';
import HeroIntro from '@components/Shared/HeroIntro';
import Layout from '@components/Shared/Layout';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import SocialLinks from '@components/Shared/SocialLinks';
import { StarIcon, TicketIcon, TranslateIcon } from '@heroicons/react/outline';
import { DEMO } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { If, Then } from 'react-if';
import WorkshopScroll from '../../components/WorkshopScroll';

const User: React.FC<any> = ({ profileData }) => {
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
              <Link href={`/${profileData?.user?.username}/reviews/${profileData?.user?.userId}`}>
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
                  <span className="text-xs capitalize">
                    {profileData?.user?.preferredLanguages
                      .slice(0, 2)
                      .map((item) => item.toLowerCase())
                      .join(', ')}
                    {profileData?.user?.preferredLanguages?.length > 2 &&
                      ` +${profileData?.user?.preferredLanguages?.length - 2} more`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {profileData?.canBookDemo && profileData?.demo?.active && (
            <div className="border-t border-b px-6 py-4 border-slate-200 bg-white">
              <Link href={`/${profileData?.user?.username}/${DEMO}/book/${profileData?.user?.userId}`}>
                <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                  <TicketIcon className="h-4 w-4 mr-2" /> Book 1:1 Demo Session
                </a>
              </Link>
            </div>
          )}

          <If condition={profileData?.expertises?.length > 0}>
            <Then>
              <br />
              <ExpertiseScroll data={profileData?.expertises} userId={profileData?.user?.userId} />
            </Then>
          </If>
          <If condition={profileData?.groupItems?.length > 0}>
            <Then>
              <hr className="mt-10 mb-4 mx-6" />
              <WorkshopScroll data={profileData?.groupItems} />
            </Then>
          </If>
          <If condition={profileData?.cohortItems?.length > 0}>
            <Then>
              <hr className="mt-10 mb-4 mx-6" />
              <CourseScroll data={profileData?.cohortItems} userId={profileData?.user?.userId} />
            </Then>
          </If>
          <If condition={profileData?.planItems?.length > 0}>
            <Then>
              <hr className="mt-10 mb-4 mx-6" />
              <PlanScroll data={profileData?.planItems} userId={profileData?.user?.userId} />
            </Then>
          </If>
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
