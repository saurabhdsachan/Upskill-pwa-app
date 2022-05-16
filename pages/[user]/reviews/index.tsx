import Layout from '@components/Shared/Layout';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import { classNames } from '@utils/helpers';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'John Doe',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'John Doe',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 4,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'John Doe',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 5,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'John Doe',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  ],
};

const Reviews: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Reviews Chef Jordan | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Reviews" />
      <Layout.Body>
        <div className="px-6">
          <div className="text-center sticky top-16 bg-white z-10 py-4">
            <h1 className="text-4xl">
              4.4 <StarIcon className="inline w-10 h-10" aria-hidden="true" />
            </h1>
            <p>4 Ratings & 3 Reviews</p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>
            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex-1 flex items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />

                      <div className="ml-3 relative flex-1">
                        <div className="h-1 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="my-8 h-1 border-b border-slate-200 text-sm text-center">
            <span className="bg-white px-5">Reviews</span>
          </div>

          {reviews.featured.map((review) => (
            <div key={review.id} className="py-4 border-b border-slate-200">
              <div className="flex items-center">
                <div className="relative bg-white w-12 h-12 rounded-full shadow-lg overflow-hidden">
                  <Image
                    className="object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=240"
                    alt="Chef Jordan"
                    width={180}
                    height={180}
                    placeholder="blur"
                    layout="intrinsic"
                    blurDataURL={blurredBgImage}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>
                </div>
              </div>
              <div
                className="mt-2 space-y-6 text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
            </div>
          ))}
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Reviews;
