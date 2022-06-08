import EmptyState from '@components/Shared/EmptyState';
import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import LoadingState from '@components/Shared/LoadingState';
import { StarIcon } from '@heroicons/react/solid';
import useFetcher from '@hooks/useFetcher';
import { blurredBgImage } from '@public/images/bg-base-64';
import { classNames, formatRating, getImageUrl } from '@utils/helpers';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Case, Switch } from 'react-if';

const Reviews: React.FC = () => {
  const router = useRouter();
  const { data, loading, error } = useFetcher({
    endpoint: router?.query?.userId ? `/store/v1/rating/creator?userId=${router?.query?.userId}` : '',
  });

  const reviews = data?.data?.ratings?.filter((item) => item?.review);

  return (
    <Layout>
      <Head>
        <title>{router?.query?.user} Rating | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} title="Reviews" />
      <Layout.Body>
        <Switch>
          <Case condition={data?.data?.numRatings !== 0 && !loading}>
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

              {reviews?.length > 0 && (
                <div className="my-8 h-1 border-b border-slate-200 text-sm text-center">
                  <span className="bg-white px-5">Reviews</span>
                </div>
              )}

              {reviews?.map((review, index) => (
                <div
                  key={review.ratingId}
                  className={classNames(reviews?.length - 1 !== index && 'border-b border-slate-200', 'py-4')}
                >
                  <div className="flex items-center">
                    <div className="relative bg-white w-12 h-12 rounded-full shadow-lg overflow-hidden">
                      <Image
                        className="object-cover rounded-full"
                        src={
                          review?.reviewerImgUrl
                            ? getImageUrl(review?.reviewerImgUrl, { height: 100, width: 100 })
                            : blurredBgImage
                        }
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
          </Case>
          <Case condition={data?.data?.numRatings === 0}>
            <EmptyState title="No reviews" message="Yet to be reviewed" />
          </Case>
          <Case condition={loading}>
            <LoadingState />
          </Case>
          <Case condition={error}>
            <ErrorState status={error?.status} />
          </Case>
        </Switch>
      </Layout.Body>
    </Layout>
  );
};

export default React.memo(Reviews);
