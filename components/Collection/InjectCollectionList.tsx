import CollectionCard from '@components/Collection/CollectionCard';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
    transform: scale(0.7);
	}
	to {
    opacity: 1;
    transform: scale(1);
	}
`;

const AnimateBox = styled.ul`
  & > li {
    opacity: 0;
    transform: scale(0.7);
    animation: ${entry} 0.4s forwards;
    &:nth-child(1) {
      animation-delay: 100ms;
    }
    &:nth-child(2) {
      animation-delay: 150ms;
    }
    &:nth-child(3) {
      animation-delay: 200ms;
    }
    &:nth-child(4) {
      animation-delay: 250ms;
    }
    &:nth-child(5) {
      animation-delay: 300ms;
    }
    &:nth-child(6) {
      animation-delay: 350ms;
    }
    &:nth-child(7) {
      animation-delay: 400ms;
    }
    &:nth-child(8) {
      animation-delay: 450ms;
    }
    &:nth-child(9) {
      animation-delay: 500ms;
    }
    &:nth-child(10) {
      animation-delay: 550ms;
    }
    &:nth-child(11) {
      animation-delay: 600ms;
    }
    &:nth-child(12) {
      animation-delay: 650ms;
    }
  }
`;

interface FeedObject {
  _id: number;
  name: string;
  metaDescription: string;
  slug: string;
  cdnThumbnail: string;
  metaTitle: string;
}

interface DesignListInterface {
  feedData: {
    list: Array<FeedObject>;
  };
}

const CollectionList: React.FC<DesignListInterface> = ({ feedData }) => {
  const { list } = feedData;

  return (
    <section className="interior-design-section">
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 pt-4">
          <div className="flex items-end">
            <div className="flex-1">
              <p className="text-gray-500">Largest collection of 3D rendered images</p>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hand Picked Collections
              </h1>
            </div>
            <div className="text-right flex-1">
              <Link href="/collection">
                <a className="text-sm hover:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded-md px-1">
                  See All <ArrowRightIcon className="inline w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
          <div className="relative">
            <AnimateBox className="grid grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-6 2xl:gap-8 my-4 2xl:my-6">
              {list.map((collection) => (
                <CollectionCard key={collection?._id} cardData={collection} inset />
              ))}
            </AnimateBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CollectionList);
