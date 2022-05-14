import CourseCard from '@components/Cards/CourseCard';
import Layout from '@components/Shared/Layout';
import { UnsplashData } from '@mocks/Unsplash';
import Head from 'next/head';
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

const Listing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Workshops | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Workshops" />
      <Layout.Body>
        <div className="bg-white min-h-free">
          <div className="px-6 grid gap-6 grid-cols-2 mb-10">
            {UnsplashData.slice(14, 20).map((item) => (
              <CourseCard key={item.imageThumbnail} src={item.imageThumbnail} type="v-card" />
            ))}
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Listing;
