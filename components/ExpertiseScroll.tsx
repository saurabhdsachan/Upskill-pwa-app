import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { CONNECT } from '@utils/constants';
import Link from 'next/link';
import React from 'react';
import ConnectCard from './Cards/ConnectCard';

const ExpertiseScroll: React.FC = ({
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
            <h3>1:1 Consultation</h3>
          </div>
          <div>
            <Link href={`/${username}/${userId}/${CONNECT}`}>
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
            <ConnectCard key={item.expertiseId} type="h-card" data={item} userId={userId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseScroll;
