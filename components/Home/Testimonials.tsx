import Carousel, { position } from '@components/Shared/Carousel';
import SectionTitle from '@components/Shared/SectionTitle';
import { StarIcon } from '@heroicons/react/solid';
import TestimonialData from '@utils/Mocks/Testimonials';
import Image from 'next/image';
import React from 'react';

const Slide = ({ testimonial }) => (
  <div className="pt-24 pb-16 text-center px-16 bg-red-50 xl:mx-5 lg:mx-3 rounded-xl">
    <div className="flex justify-center">
      {[...new Array(5)].map((_d, i) => (
        <StarIcon key={`star-${i}`} className="w-10 h-10 text-yellow-400" />
      ))}
    </div>
    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
      <h3 className="text-2xl text-gray-800 max-w-3xl mx-auto">{testimonial?.shortDescription}</h3>
      <div className="relative md:flex-grow">
        <svg
          className="absolute top-3 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-300"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-sm text-gray-600 mt-10">{testimonial?.description}</p>
      </div>
      <footer className="mt-8">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
            <Image
              className="h-50 w-50 rounded-md shadow-md object-cover filter contrast-125"
              src={`https://res.cloudinary.com/spacejoy/${testimonial.dp}`}
              alt={testimonial.name}
              height={'40'}
              width={'40'}
              layout="intrinsic"
            />
          </div>
          <div className="ml-4 text-left">
            <div className="text-base font-medium">Judith Black</div>
            <div className="text-sm font-medium text-gray-600">CEO, Tuple</div>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
);

const Testimonials = (): JSX.Element => (
  <div>
    <SectionTitle
      feature="Testimonials"
      title="Hear it from our customers"
      description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
    />
    <div className="relative">
      <Carousel centerPadding="20%" centerMode customButtons position={position.top}>
        {TestimonialData.map((testimonial) => (
          <Slide key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonials;
