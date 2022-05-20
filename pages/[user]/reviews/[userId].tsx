import Layout from '@components/Shared/Layout';
import { StarIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import fetcher from '@utils/fetcher';
import { classNames, formatRating, getImageUrl } from '@utils/helpers';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

const Reviews: React.FC = () => {
  const router = useRouter();
  const { data, error } = useSWR(`/store/v1/rating/creator?userId=${router?.query?.userId}`, fetcher);

  if (error) return <p>An error has occurred.</p>;
  if (!data) return <p>Loading</p>;

  return (
    <Layout>
      <Head>
        <title>{router?.query?.user} Rating | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Reviews" />
      <Layout.Body>
        <div className="px-6">
          <div className="text-center sticky top-16 bg-white z-10 py-4">
            <h1 className="text-4xl">
              {data?.data?.averageRating} <StarIcon className="inline w-10 h-10" aria-hidden="true" />
            </h1>
            <p>
              {data?.data?.numRatings} Ratings & {data?.data?.ratingBreakout?.HAS_REVIEW} Reviews
            </p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>
            <dl className="space-y-3">
              {formatRating({ ...data?.data?.ratingBreakout })?.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex-1 flex items-center">
                    <p className="w-3 font-medium text-slate-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>

                    <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-slate-300',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />

                      <div className="ml-3 relative flex-1">
                        <div className="h-1 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                            style={{ width: `calc(${count.count} / ${data?.data?.numRatings} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right tabular-nums text-sm text-slate-900">
                    {Math.round((count.count / data?.data?.numRatings) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="my-8 h-1 border-b border-slate-200 text-sm text-center">
            <span className="bg-white px-5">Reviews</span>
          </div>

          {data?.data?.ratings?.map((review) => (
            <div key={review.ratingId} className="py-4 border-b border-slate-200">
              <div className="flex items-center">
                <div className="relative bg-white w-12 h-12 rounded-full shadow-lg overflow-hidden">
                  <Image
                    className="object-cover rounded-full"
                    src={getImageUrl(review?.reviewerImgUrl, { height: 100, width: 100 })}
                    alt={review?.reviewerName}
                    width={48}
                    height={48}
                    placeholder="blur"
                    layout="intrinsic"
                    blurDataURL={blurredBgImage}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900">{review.reviewerName}</h4>
                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-slate-300',
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
                className="mt-2 space-y-6 text-sm text-slate-600"
                dangerouslySetInnerHTML={{ __html: review.review }}
              />
            </div>
          ))}
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default React.memo(Reviews);
