import Layout from '@components/Shared/Layout';
import { LightBulbIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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

const SessionDetail: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>How to cook in 10 days | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="How to cook in 10 days" />
      <Layout.Body>
        <div className="bg-white min-h-free">
          <div className="bg-white overflow-hidden">
            <Image
              src="https://images.pep.live/images/img/2022-05-13%2F7/jpeg/q100/w700/h0/2771b301-420a-4cac-9183-83c7902d0dc7/0.jpeg"
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
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=240"
                alt="Chef Jordan"
                width={80}
                height={80}
                placeholder="blur"
                layout="intrinsic"
                blurDataURL={blurredBgImage}
              />
            </div>
            <div className="flex-1">
              <p className="font-bold leading-3">Chef Jordan</p>
              <small className="text-slate-600">chefking</small>
            </div>
            <div>
              <button className="inline-flex items-center justify-center w-full py-1.5 px-3 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 shadow-xs shadow-slate-500/50">
                <UserGroupIcon className="h-4 w-4 mr-2" /> <span className="text-xs">Follow</span>
              </button>
            </div>
          </div>
          <hr />
          <div className="px-6 py-4">
            <h1 className="text-2xl">Mindful Biryani</h1>
            <div className="flex items-center my-1">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(5 > rating ? 'text-yellow-500' : 'text-gray-200', 'h-4 w-4 flex-shrink-0')}
                  aria-hidden="true"
                />
              ))}{' '}
              <small className="text-xs text-slate-600 ml-1">5 (25)</small>
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
                  <div className="ml-3.5 text-sm font-medium text-gray-900">Plan</div>
                </a>{' '}
              </li>
              <li className="inline">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                >
                  <div className="absolute flex-shrink-0 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3.5 text-sm font-medium text-gray-900">Yoga</div>
                </a>{' '}
              </li>
            </ul>
            <div className="mt-4">
              <h2 className="font-bold">Highlights</h2>
              <div className="prose prose-sm">
                <ul role="list">
                  {product.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-bold mb-2">Details</h2>
              <p
                className="prose prose-sm whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
            <hr className="my-10" />
            <div className="mt-4">
              <LightBulbIcon className="w-10 h-10 text-slate-400" />
              <h2 className="text-xl font-bold mb-2 text-slate-400">How to join</h2>
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

export default SessionDetail;
