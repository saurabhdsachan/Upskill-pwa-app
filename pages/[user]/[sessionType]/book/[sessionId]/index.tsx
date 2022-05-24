import Episodes from '@components/Episodes';
import Layout from '@components/Shared/Layout';
import QuickHelp from '@components/Shared/QuickHelp';
import { TicketIcon, UserGroupIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { COURSE, PLAN, WORKSHOP } from '@utils/constants/index';
import fetcher from '@utils/fetcher';
import { classNames, formatPrice, getImageUrl } from '@utils/helpers';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Case, Default, Switch } from 'react-if';
import { CONNECT } from '../../../../../utils/constants/index';

const SessionDetail: React.FC = ({ data, sessionType, user }) => {
  const session = data?.groupSession || data?.cohortSession || data?.planSession || data;

  const sessionTitle = session?.title || session?.name || session?.expertiseName;

  return (
    <Layout>
      <Head>
        <title>
          {sessionTitle} by {user} | Pep
        </title>
      </Head>
      <Layout.Header backflow={true} title={sessionTitle} />
      <Layout.Body>
        <div className="bg-white min-h-free">
          <div className="bg-white overflow-hidden">
            <Image
              src={
                session?.coverImgUrl || session?.coverImageUrl
                  ? getImageUrl(session?.coverImgUrl || session?.coverImageUrl, { height: 0, width: 800 })
                  : blurredBgImage
              }
              alt={sessionTitle}
              title={sessionTitle}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurredBgImage}
            />
          </div>
          {data?.user && (
            <div className="flex px-6 py-4 space-x-4 justify-center items-center">
              <Link href={`/${data?.user?.username}`}>
                <a href="" className="flex-1">
                  <div className="flex space-x-4 justify-center items-center">
                    <div className="relative bg-white w-14 h-14 border-2 rounded-full border-white shadow-xs overflow-hidden">
                      <Image
                        className="object-cover rounded-full"
                        src={
                          data?.user?.profileImgUrl
                            ? getImageUrl(data?.user?.profileImgUrl, { height: 180, width: 180 })
                            : blurredBgImage
                        }
                        alt={data?.user?.name}
                        width={80}
                        height={80}
                        placeholder="blur"
                        layout="intrinsic"
                        blurDataURL={blurredBgImage}
                      />
                    </div>
                    <div className="flex-1 w-[100px] break-all truncate text-ellipsis">
                      <p className="font-bold leading-4">{data?.user?.name}</p>
                      <small className="text-slate-600">{data?.user?.username}</small>
                    </div>
                  </div>
                </a>
              </Link>
              <div>
                <button className="inline-flex items-center justify-center w-full py-1.5 px-3 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 shadow-xs shadow-slate-500/50">
                  <UserGroupIcon className="h-4 w-4 mr-2" /> <span className="text-xs">Follow</span>
                </button>
              </div>
            </div>
          )}
          <hr />
          <div className="px-6 py-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-2xl capitalize">{sessionTitle}</h1>
                {session?.rating && (
                  <div className="flex items-center my-1">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          parseInt(data?.rating?.averageRating) > rating ? 'text-yellow-500' : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}{' '}
                    <small className="text-xs text-slate-600 ml-1">
                      {data?.rating?.averageRating} ({data?.rating?.ratingCount})
                    </small>
                  </div>
                )}
              </div>
              <div>
                <small className="text-slate-600 text-xs">{session?.currencyCode}</small>
                <h4 className="font-semibold text-lg leading-6">{formatPrice.format(session?.price)}</h4>
              </div>
            </div>
            {session?.categoryName && (
              <ul role="list" className="mt-2 leading-8">
                <li className="inline">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                  >
                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" aria-hidden="true" />
                    </div>
                    <div className="ml-3.5 text-sm font-medium text-gray-900">{session?.categoryName}</div>
                  </a>
                </li>
              </ul>
            )}

            {session?.bullets && (
              <div className="mt-4">
                <h2 className="font-bold">Highlights</h2>
                <div className="prose prose-sm">
                  <ul role="list">
                    {session?.bullets?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="mt-4">
              <h2 className="font-bold mb-2">Details</h2>
              <p
                className="prose prose-sm whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: session?.description }}
              />
            </div>
            {session?.episodes && <Episodes data={session?.episodes} />}
            {!session?.episodes && <hr className="my-10" />}
            <QuickHelp />
          </div>
          <div className="p-6 sticky bottom-0 bg-white">
            <Switch>
              <Case
                condition={
                  (sessionType !== PLAN && data?.instances && data?.instances?.instances?.length) ||
                  (sessionType === PLAN && !data?.planSession?.sessionMetaTags?.includes('PUBLISHED'))
                }
              >
                <Link href={`/${user}/${sessionType}/book/${session?.sessionId}/slots`}>
                  <a className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                    <TicketIcon className="h-4 w-4 mr-2" />
                    Choose Slot
                  </a>
                </Link>
              </Case>
              <Default>
                <button
                  disabled
                  className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium bg-slate-200 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400"
                >
                  <TicketIcon className="h-4 w-4 mr-2" />
                  No slots available
                </button>
              </Default>
            </Switch>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { user: 'himachalherbal', sessionId: '49099d99-ee71-4654-b94d-5a3ab7f99541', sessionType: 'workshop' },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { sessionId, sessionType, user } }) => {
  let stype = '';
  let endpoint = '';
  switch (sessionType) {
    case WORKSHOP:
      stype = 'GROUP';
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${stype}`;
      break;
    case COURSE:
      stype = 'COHORT';
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${stype}`;
      break;
    case PLAN:
      stype = 'PLAN';
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${stype}`;
      break;
    case CONNECT:
      stype = 'EXPERTISE';
      endpoint = `/inventory/v1/expertise/user/4fa37d3a-2a7e-40f9-b14f-b3a049055e17/expertise/${sessionId}`;
      break;
    default:
      stype = 'PLAN';
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${stype}`;
  }

  const res = await fetcher(endpoint, {});

  return {
    props: {
      data: res?.data,
      sessionType,
      user,
    },
  };
};

export default React.memo(SessionDetail);
