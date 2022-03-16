import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SectionTitle from '@components/Shared/SectionTitle';
import { GiftIcon, GlobeIcon, HandIcon, HeartIcon, LinkIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import { Controller } from 'react-scrollmagic';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?&auto=format&fit=facearea&facepad=4&w=600',
  },
  // More people...
];

const career: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Career @Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container mx-auto px-4">
          <Image
            className="object-cover rounded-lg"
            src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,f_auto,w_2000/v1637037796/spj-v2/careers_tqwyqx.webp"
            height="500"
            width="1500"
            alt="career banner"
            layout="responsive"
          />
          <div className="bg-white">
            <SectionTitle
              feature="Workplace"
              title="Best place to work & Grow"
              description="We care deeply about building the company we want to work at. We believe that our culture is shaped by every member of the team. If you join us, you'll have the opportunity to shape how we work and collaborate."
            />
            <p className="text-center text-base text-gray-500 tracking-wider">Benefits</p>
            <Controller>
              <ScrollTrigger start="-500px center" end="-100px center" scrub={0.5}>
                <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 my-4 max-w-5xl mx-auto rounded-lg shadow">
                  <Tween
                    from={{ scale: 0.95, opacity: 0, y: 50 }}
                    to={{ scale: 1, opacity: 1, y: 0 }}
                    stagger={0.5}
                    duration={1}
                  >
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700 rounded-tl-lg">
                      <GiftIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Competitive salary and equity</p>
                    </div>
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700">
                      <GlobeIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Remote work with flexible hours</p>
                    </div>
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700 rounded-tr-lg">
                      <HeartIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Generous parental leave</p>
                    </div>
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700 rounded-bl-lg">
                      <HandIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Company retreats</p>
                    </div>
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700">
                      <LinkIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Mentorship from our network</p>
                    </div>
                    <div className="col-span-1 text-center py-4 px-4 bg-gray-100 text-gray-700 rounded-br-lg">
                      <GiftIcon className="w-6 h-6 inline" />
                      <p className="mt-3">Lorem ipsum</p>
                    </div>
                  </Tween>
                </div>
              </ScrollTrigger>
            </Controller>

            <SectionTitle
              feature="Extra Benefits"
              title="Open Positions"
              description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam."
            />
            <div className="flex">
              <div className="my-4 flex-1 mx-auto max-w-5xl">
                <div className="align-middle">
                  <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Image
                                    className="h-10 w-10 rounded-full"
                                    src={person.image}
                                    alt="Job"
                                    height="50"
                                    width="50"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.title}</div>
                              <div className="text-sm text-gray-500">{person.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default career;
