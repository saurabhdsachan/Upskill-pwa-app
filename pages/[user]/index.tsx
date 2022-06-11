import CourseScroll from '@components/CourseScroll';
import ExpertiseScroll from '@components/ExpertiseScroll';
import { Hero1 } from '@components/Hero';
import HeroAction from '@components/HeroAction';
import HeroGem from '@components/HeroGem';
import PlanScroll from '@components/PlanScroll';
import Avatar from '@components/Shared/Avatar';
import EmptyState from '@components/Shared/EmptyState';
import HeroIntro from '@components/Shared/HeroIntro';
import Layout from '@components/Shared/Layout';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import SocialLinks from '@components/Shared/SocialLinks';
import WorkshopScroll from '@components/WorkshopScroll';
import { StarIcon, TicketIcon, TranslateIcon } from '@heroicons/react/outline';
import { SESSION_TYPE } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Else, If, Then } from 'react-if';

interface IUserPage {
  data: {
    user: IUser;
    rating: IRating;
    canBookDemo: boolean;
    demo: IDemo;
    expertises: IExpertise[];
    groupItems: IGroupItem[];
    cohortItems: ICohortItem[];
    planItems: IPlanItem[];
  };
  status: number;
}

const User: React.FC<IUserPage> = ({ data, status }) => {
  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Head>
          <title>{data?.user?.name} | Pep</title>
        </Head>
        <Layout.Header backflow={false} title={data?.user?.name} />
        <Layout.Body>
          <If condition={status > 300}>
            <Then>
              <EmptyState title="User not found" message="User is not available on Pep" />
            </Then>
            <Else>
              <div className="px-6 pb-6 text-center bg-white">
                <Hero1 />
                <Avatar source={data?.user?.profileImgUrl} />
                <HeroIntro name={data?.user?.name} username={data?.user?.username} />
                <HeroGem
                  followersCount={data?.user?.followersCount}
                  followingCount={data?.user?.followingCount}
                  sessionsTaken={data?.user?.sessionsTaken}
                />
                <HeroAction />
                <SocialLinks
                  twitter={data?.user?.twitterUrl}
                  facebook={data?.user?.fbUrl}
                  instagram={data?.user?.instaUrl}
                />
                {data?.user?.description && <p className="text-sm text-slate-700">{data?.user?.description}</p>}
                <div className="flex mt-6 space-x-6 justify-center">
                  <Link href={`/${data?.user?.username}/${data?.user?.userId}/reviews`}>
                    <a>
                      <div className="flex items-center justify-start space-x-2">
                        <div className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-full">
                          <StarIcon className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="text-left">
                          <small className="text-xs  text-blue-500 block">Rating</small>
                          <span className="text-xs">
                            {data?.rating?.averageRating} ({data?.rating?.ratingCount})
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
                        {data?.user?.preferredLanguages
                          .slice(0, 2)
                          .map((item) => item.toLowerCase())
                          .join(', ')}
                        {data?.user?.preferredLanguages?.length > 2 &&
                          ` +${data?.user?.preferredLanguages?.length - 2} more`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {data?.canBookDemo && data?.demo?.active && (
                <div className="border-t border-b px-6 py-4 border-slate-200 bg-white">
                  <Link href={`/${data?.user?.username}/${data?.user?.userId}/${SESSION_TYPE.DEMO}/book/demo/slots`}>
                    <a className="uppercase inline-flex items-center justify-center w-full py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                      <TicketIcon className="h-4 w-4 mr-2" /> Book 1:1 Demo Session
                    </a>
                  </Link>
                </div>
              )}

              <If condition={data?.expertises?.length > 0}>
                <Then>
                  <br />
                  <ExpertiseScroll
                    initData={data?.expertises}
                    username={data?.user?.username}
                    userId={data?.user?.userId}
                  />
                </Then>
              </If>
              <If condition={data?.groupItems?.length > 0}>
                <Then>
                  <hr className="mt-10 mb-4 mx-6" />
                  <WorkshopScroll
                    initData={data?.groupItems}
                    username={data?.user?.username}
                    userId={data?.user?.userId}
                  />
                </Then>
              </If>
              <If condition={data?.cohortItems?.length > 0}>
                <Then>
                  <hr className="mt-10 mb-4 mx-6" />
                  <CourseScroll
                    initData={data?.cohortItems}
                    username={data?.user?.username}
                    userId={data?.user?.userId}
                  />
                </Then>
              </If>
              <If condition={data?.planItems?.length > 0}>
                <Then>
                  {data?.cohortItems?.length > 0 && data?.groupItems?.length > 0 && <hr className="mt-10 mb-4 mx-6" />}
                  <PlanScroll initData={data?.planItems} username={data?.user?.username} userId={data?.user?.userId} />
                </Then>
              </If>
            </Else>
          </If>
        </Layout.Body>
        <Layout.PreFooter />
        <Layout.Footer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { user: 'nikhil' } }], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params: { user } }) => {
  const endpoint = `/store/v1/user/details/others?username=${user}`;
  const res = await fetcher(endpoint);

  return {
    props: {
      ...res,
    },
  };
};

export default React.memo(User);
