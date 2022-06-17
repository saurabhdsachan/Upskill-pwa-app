import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { SESSION_TYPE } from '@utils/constants';
import { getPageTitle } from '@utils/helpers';
import Link from 'next/link';
import React from 'react';
import PlanCard from './Cards/PlanCard';

interface IPlanScroll {
  initData: IPlanItem[];
  username: string;
  userId: string;
}

const PlanScroll: React.FC<IPlanScroll> = ({ initData, username, userId }) => {
  return (
    <section>
      <div className="px-6 py-4">
        <div className="flex">
          <div className="flex-1">
            <h3>{getPageTitle(SESSION_TYPE.PLAN)}</h3>
          </div>
          <div>
            <Link href={`/${username}/${userId}/${SESSION_TYPE.PLAN}`}>
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
            <PlanCard key={item?.session?.sessionId} type="h-card" data={item?.session} userId={userId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanScroll;
