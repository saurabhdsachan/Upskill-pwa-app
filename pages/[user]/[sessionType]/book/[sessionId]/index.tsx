import Layout from '@components/Shared/Layout';
import { LightBulbIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import fetcher from '@utils/fetcher';
import { classNames, getImageUrl } from '@utils/helpers';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  description: `Yama (Principles or moral code)
    Ahimsa - A principle of non-violence
    Satya - A principle of Truthfulness
    Asteya - A principle of non stealing
    Brahmacharya - Continence / Celibacy
    Aparigah - A principle of non-hoarding or non possessiveness
    Niyama (Personal Disciplines)
    Shoucha - Purity
    Santosh - Contentment
    Tapa - Endurance
    Swadhyaya - Self study
    Eshwar Pranidhan - Dedication
    Asana (Yoga Positions or Yogic Postures)
    A stable and comfortable posture which helps attain mental equilibrium.
    
    Pranayama (Yogic Breathing)
    Extension and control of breath.
    
    Pratyahara (Withdrawal of Senses)
    A mental preparation to increase the power of mind.
    
    Dharana (Concentration on Object)
    Concentration of mind on one object and its field.
    
    Dhyan (Meditation)
    With drawing mind from all external objects and Focusing it on one point and meditating on it.
    
    Samadhi (Salvation)
    State of Super bliss, joy and merging individual consciousness in to universal consciousness. Union between Jivatman and Paramatman. Union of Shiva and Shakti in Sahasrar Chakra (the top of the head). Realizing the Bramhan (pure consciousness) or Realization of God is the ultimate achievement of Human Birth.
  `,
  details: [
    'Group session | 3 audience size',
    'Sessions on: Mon, Tue,Wed,Thu',
    '10 Sessions: 5:00 pm - 7:00 PM (60 Min)',
    'Machine wash cold with similar colors',
    'Language: English',
  ],
};

const SessionDetail: React.FC = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <Head>
        <title>{data?.groupSession?.title} | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title={data?.groupSession?.title} />
      <Layout.Body>
        <div className="bg-white min-h-free">
          <div className="bg-white overflow-hidden">
            <Image
              src={
                data?.groupSession?.coverImgUrl
                  ? getImageUrl(data?.groupSession?.coverImgUrl, { height: 0, width: 800 })
                  : 'https://images.unsplash.com/photo-1602464729960-f95937746b68?auto=format&fit=crop&w=200'
              }
              alt="how to cook"
              title="ho to cook"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurredBgImage}
            />
          </div>
          <div className="flex px-6 py-4 space-x-4 justify-center items-center">
            <div className="relative bg-white w-14 h-14 border-2 rounded-full border-white shadow-xs overflow-hidden">
              <Image
                className="object-cover rounded-full"
                src={
                  data?.user?.profileImgUrl
                    ? getImageUrl(data?.user?.profileImgUrl, { height: 180, width: 180 })
                    : 'https://images.unsplash.com/photo-1602464729960-f95937746b68?auto=format&fit=crop&w=200'
                }
                alt={data?.user?.name}
                width={80}
                height={80}
                placeholder="blur"
                layout="intrinsic"
                blurDataURL={blurredBgImage}
              />
            </div>
            <div className="flex-1">
              <p className="font-bold leading-3">{data?.user?.name}</p>
              <small className="text-slate-600">{data?.user?.username}</small>
            </div>
            <div>
              <button className="inline-flex items-center justify-center w-full py-1.5 px-3 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 shadow-xs shadow-slate-500/50">
                <UserGroupIcon className="h-4 w-4 mr-2" /> <span className="text-xs">Follow</span>
              </button>
            </div>
          </div>
          <hr />
          <div className="px-6 py-4">
            <div>
              <h1 className="text-2xl">{data?.groupSession?.title}</h1>
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
              <div>
                <small className="text-slate-600 text-xs">INR</small>
                <h4 className="font-semibold text-lg leading-6">1,243.00</h4>
              </div>
            </div>
            <ul role="list" className="mt-2 leading-8">
              <li className="inline">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                >
                  <div className="absolute flex-shrink-0 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3.5 text-sm font-medium text-gray-900">{data?.groupSession?.categoryName}</div>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h2 className="font-bold">Highlights</h2>
              <div className="prose prose-sm">
                <ul role="list">
                  {data?.groupSession?.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-bold mb-2">Details</h2>
              <p
                className="prose prose-sm whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: data?.groupSession?.description }}
              />
            </div>
            <hr className="my-10" />
            <div className="mt-4">
              <LightBulbIcon className="w-10 h-10 text-slate-400" />
              <h2 className="text-xl font-bold mb-10 text-slate-400">How to join</h2>
              <h4 className="font-semibold mb-2">Option 1 - Through Expert&apos;s Pep Website:</h4>
              <p className="prose prose-sm">
                Click on the expert&apos;s Pep website link → Login/Signup → click on ‘Bookings‘ → You will see booking
                details with ‘Join Now‘ button before 10 min of the start time
              </p>
              <br />
              <h4 className="font-semibold mb-2">Option 2 - Through Pep App:</h4>
              <p className="prose prose-sm">
                Install Pep app from Google Playstore → Login/Signup → click on ‘Bookings‘ tab → You will see booking
                details with ‘Join Now‘ button before 10 min of the start time
              </p>
            </div>
          </div>
          <div className="p-6 sticky bottom-0 bg-white">
            <Link href="/chef-jordan/workshops/book/learn-cooking-in-5-days/slots">
              <a className="uppercase inline-flex items-center justify-center w-full py-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-400">
                <TicketIcon className="h-4 w-4 mr-2" />
                Choose Slot
              </a>
            </Link>
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

export const getStaticProps: GetStaticProps = async ({ params: { sessionId, sessionType } }) => {
  const endpoint = `/store/v1/sessions/details?sessionId=${sessionId}&sessionType=GROUP`;
  const res = await fetcher(endpoint, {});

  return {
    props: {
      data: res?.data,
    },
  };
};

export default React.memo(SessionDetail);
