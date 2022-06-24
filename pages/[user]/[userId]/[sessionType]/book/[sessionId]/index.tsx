import Episodes from '@components/Episodes';
import Bullets from '@components/Shared/Bullets';
import Button from '@components/Shared/Button/Button';
import EmptyState from '@components/Shared/EmptyState';
import HeroName from '@components/Shared/HeroName';
import Layout from '@components/Shared/Layout';
import QuickHelp from '@components/Shared/QuickHelp';
import Tags from '@components/Shared/Tags';
import { useDataBusStore } from '@context/dataBusContext';
import { TicketIcon, UserGroupIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { SESSION_TYPE } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { classNames, formatPrice, getImageUrl, sessionTypeMapper, tsConvert, weekShortName } from '@utils/helpers';
import { getShareMessage } from '@utils/ShareMessage';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Case, Default, Else, If, Switch, Then } from 'react-if';

interface ISessionDetail {
  data: ISession | any;
  status: number;
  sessionType: SESSION_TYPE;
  sessionId: string;
  user: IUser;
  userId: string;
}

const SessionDetail: React.FC<ISessionDetail> = ({ data, status, sessionType, sessionId, user, userId }) => {
  const router = useRouter();
  const { updateDownloadAppBottomSheetState, updateShareData } = useDataBusStore();

  const session = data?.groupSession || data?.cohortSession || data?.planSession || data;

  const sessionTitle = session?.title || session?.name || session?.expertiseName;

  useEffect(() => {
    updateShareData({
      text: sessionTitle,
      url: data?.sessionUrl,
      message: getShareMessage({
        session,
        sessionUrl: data?.sessionUrl,
        creatorUserName: data?.user?.username || router?.query?.user,
        sessionType,
      }),
    });
  }, [
    data.creatorUserName,
    data?.sessionUrl,
    data?.user?.username,
    router?.query?.user,
    session,
    sessionTitle,
    sessionType,
    updateShareData,
  ]);

  return (
    <Layout>
      <Head>
        <title>
          {sessionTitle} by {user} | Pep
        </title>
      </Head>
      <Layout.Header title={sessionTitle} backflow={true} showShare={true} showBooking={false} />
      <If condition={status < 300}>
        <Then>
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
                    <a className="flex-1">
                      <div className="flex space-x-4 justify-center items-center">
                        <div className="relative bg-white w-14 h-14 border-2 rounded-full border-white shadow-xs overflow-hidden">
                          <Image
                            className="object-cover rounded-full"
                            src={
                              data?.user?.profileImgUrl
                                ? getImageUrl(data?.user?.profileImgUrl, { height: 90, width: 90 })
                                : blurredBgImage
                            }
                            alt={data?.user?.name}
                            width={60}
                            height={60}
                            placeholder="blur"
                            layout="intrinsic"
                            blurDataURL={blurredBgImage}
                          />
                        </div>
                        <HeroName name={data?.user?.name} username={data?.user?.username} />
                      </div>
                    </a>
                  </Link>
                  <div>
                    <Button
                      bg="slate"
                      onClick={() => updateDownloadAppBottomSheetState(true)}
                      className="py-1.5 px-3 bg-slate-500"
                    >
                      <UserGroupIcon className="h-4 w-4 mr-2" aria-hidden="true" />{' '}
                      <span className="text-xs">Follow</span>
                    </Button>
                  </div>
                </div>
              )}
              <hr />
              <div className="px-6 py-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-2xl capitalize">{sessionTitle}</h1>
                    {session?.subLabel && <small className="text-xs text-slate-400">{session?.subLabel}</small>}
                    {session?.rating && (
                      <div className="flex items-center my-1">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              parseInt(data?.rating?.averageRating) > rating ? 'text-yellow-500' : 'text-slate-200',
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
                    <h3 className="font-semibold text-lg leading-6">{formatPrice.format(session?.price)}</h3>
                  </div>
                </div>
                {session?.categoryName && <Tags data={[session?.categoryName]} />}

                {session?.bullets && sessionType !== SESSION_TYPE.PLAN && (
                  <Bullets title="Highlights" data={session?.bullets} />
                )}

                {session?.daysOfWeek && sessionType === SESSION_TYPE.PLAN && (
                  <div className="mt-4">
                    <h2 className="font-bold">Highlights</h2>
                    <div className="prose prose-sm capitalize break-words">
                      <ul role="list">
                        <li>{session?.pax === 1 ? '1:1 session' : `Group Session | ${session?.pax} audience size`}</li>
                        <li>{session?.totalSessions} sessions</li>
                        <li>
                          Time:{' '}
                          <span className="lowercase">
                            {tsConvert(session?.startTime)} ({session?.durationInMinutes} min)
                          </span>
                        </li>
                        <li>{weekShortName(session?.daysOfWeek).join(', ')}</li>
                        {session?.sessionLanguage && <li>{session?.sessionLanguage?.toLowerCase()}</li>}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <h2 className="font-bold mb-2">Description</h2>
                  <p
                    className="prose prose-sm whitespace-pre-line break-words"
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
                      (sessionType !== SESSION_TYPE.PLAN && data?.instances && data?.instances?.instances?.length) ||
                      (sessionType === SESSION_TYPE.PLAN &&
                        !data?.planSession?.sessionMetaTags?.includes('PAUSED') &&
                        data?.planSession?.startTime !== 0) ||
                      sessionType === SESSION_TYPE.CONNECT
                    }
                  >
                    <Link href={`/${user}/${userId}/${sessionType}/book/${sessionId}/slots`}>
                      <a className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                        <TicketIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                        {sessionType === SESSION_TYPE.CONNECT || sessionType === SESSION_TYPE.DEMO
                          ? 'Book 1-1 Session'
                          : 'Choose Slot'}
                      </a>
                    </Link>
                  </Case>
                  <Default>
                    <Button disabled size="xl" className="uppercase">
                      <TicketIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                      No slots available
                    </Button>
                  </Default>
                </Switch>
              </div>
            </div>
          </Layout.Body>
          <Layout.Footer />
        </Then>
        <Else>
          <EmptyState title="Data not found" message="Data not found" />
        </Else>
      </If>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          user: 'sa14',
          userId: '4fa37d3a-2a7e-40f9-b14f-b3a049055e17',
          sessionId: '43a01fd1-44b8-474d-9358-a307bd7bcd0e',
          sessionType: SESSION_TYPE.CONNECT,
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { sessionId, sessionType, user, userId } }) => {
  let endpoint = '';
  switch (sessionType) {
    case SESSION_TYPE.WORKSHOP:
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${sessionTypeMapper(sessionType)}`;
      break;
    case SESSION_TYPE.COURSE:
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${sessionTypeMapper(sessionType)}`;
      break;
    case SESSION_TYPE.PLAN:
      endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=${sessionTypeMapper(sessionType)}`;
      break;
    case SESSION_TYPE.CONNECT:
      endpoint = `/inventory/v1/expertise/user/${userId}/expertise/${sessionId}`;
      break;
  }

  const res = await fetcher(endpoint);

  return {
    props: {
      ...res,
      sessionType,
      sessionId,
      user,
      userId,
    },
    revalidate: 10,
  };
};

export default React.memo(SessionDetail);
