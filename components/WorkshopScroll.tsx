import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { WORKSHOP } from '@utils/constants';
import Link from 'next/link';
import React from 'react';
import WorkshopCard from './Cards/WorkshopCard';

const WorkshopScroll: React.FC = ({
  initData,
  username,
  userId,
}: {
  initData: any;
  username: string;
  userId: string;
}) => {
  return (
    <section>
      <div className="px-6 py-4">
        <div className="flex">
          <div className="flex-1">
            <h3>Workshops</h3>
          </div>
          <div>
            <Link href={`/${username}/${userId}/${WORKSHOP}`}>
              <a>
                <small className="text-xs text-slate-600">
                  See all <ChevronDoubleRightIcon className="w-2 h-2 inline" />{' '}
                </small>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative overflow-auto">
        <div className="overflow-x-auto flex no-scrollbar">
          {initData?.map((item) => (
            <WorkshopCard key={item?.session?.sessionId} type="h-card" data={item?.session} userId={userId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopScroll;
