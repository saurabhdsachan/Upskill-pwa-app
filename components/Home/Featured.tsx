import FeaturedData from '@mocks/FeaturedData';
import Image from 'next/image';
import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import SectionTitle from '../Shared/SectionTitle';

const Featured: React.FC = () => {
  return (
    <>
      <SectionTitle
        feature="Media"
        title="Where Have We Been Mentioned?"
        description="Some of the world’s leading design publications."
      />
      <div className="container mx-auto px-4">
        <div className="-mb-56 xl:-mb-72 max-w-7xl mx-auto z-10 relative">
          <div className="p-4 xl:p-8 shadow-lg rounded-lg border border-gray-100 bg-gradient-to-r from-blue-50 to-pink-50">
            <ScrollTrigger start="-500px center" end="-100px center">
              <div className="grid gap-4 xl:gap-8 grid-cols-4">
                <Tween
                  from={{ scale: 0.95, opacity: 0, y: 50 }}
                  to={{ scale: 1, opacity: 1, y: 0 }}
                  stagger={0.5}
                  duration={1}
                >
                  {FeaturedData.map((item) => (
                    <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-white" key={item.id}>
                      <Image
                        src={item.logo}
                        alt="spacejoy happy customer"
                        height={'130'}
                        width={'200'}
                        layout="intrinsic"
                      />
                    </div>
                  ))}
                </Tween>
              </div>
            </ScrollTrigger>
          </div>
          <p className="max-w-3xl mx-auto text-gray-50 text-center mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maiores ea possimus rem consectetur ipsa
            labore consequatur repellat odit nihil veniam, sint ipsum sit nostrum et omnis praesentium ducimus?
            Asperiores.
          </p>
        </div>
      </div>
      <div className="relative ">
        <Image
          className="filter contrast-125 object-cover"
          src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1896,h_759/v1622186205/spj-v2/spj-living-room_gyepig.webp"
          alt="spacejoy happy customer"
          height={'450'}
          width={'1896'}
          layout="responsive"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-70" />
      </div>
    </>
  );
};

export default Featured;
