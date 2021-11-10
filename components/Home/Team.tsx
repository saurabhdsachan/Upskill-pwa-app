import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import TeamData from '@mocks/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';

const BigText = styled.h3`
  position: relative;
  font-size: 12rem;
  @media (max-width: 1536px) {
    font-size: 10rem;
  }
  @media (max-width: 1280px) {
    font-size: 8rem;
  }
`;

const Team: React.FC = () => {
  return (
    <Controller>
      <div className="mt-40">
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="w-5/12">
              <Scene duration={500} triggerHook={0.2} pin={true} enabled={true} indicators={false}>
                <div>
                  <div className="absolute top-0 -left-8 w-28 h-28 bg-yellow-300 rounded-2xl" />
                  <BigText className="text-5xl py-10 text-gray-300">Meet Our Team</BigText>
                </div>
              </Scene>
            </div>
            <ScrollTrigger start="-500px center" end="600px center" scrub={0.5}>
              <div className="w-7/12">
                <div className="grid grid-cols-3 gap-4 xl:gap-8">
                  <Tween
                    from={{ scale: 0.9, opacity: 0.5, y: 100 }}
                    to={{ scale: 1, opacity: 1, y: 0 }}
                    stagger={0.2}
                    duration={2}
                  >
                    {TeamData.map((member) => (
                      <div className=" rounded-xl overflow-hidden" key={member.id}>
                        <Image
                          className="rounded-xl filter contrast-125"
                          src={member.thumbnail}
                          alt="spacejoy happy customer"
                          height="500"
                          width="500"
                          layout="responsive"
                        />
                      </div>
                    ))}
                    <div>
                      <Link href="/online-interior-designers">
                        <a className="text-white">
                          <div className="group w-full h-full rounded-xl overflow-hidden bg-yellow-300 flex items-end justify-end">
                            <p className="px-5 py-3 2xl:px-10 2xl:py-6 text-3xl xl:text-5xl font-bold">
                              Team{' '}
                              <ArrowNarrowRightIcon className="inline h-8 w-8 transition group-hover:translate-x-1" />
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </Tween>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </Controller>
  );
};

export default Team;
