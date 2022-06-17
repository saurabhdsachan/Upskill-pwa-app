import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { SESSION_TYPE } from '@utils/constants';
import { getPageTitle } from '@utils/helpers';
import Link from 'next/link';
import React from 'react';
import CourseCard from './Cards/CourseCard';

interface ICourseScroll {
  initData: ICohortItem[];
  username: string;
  userId: string;
}

const CourseScroll: React.FC<ICourseScroll> = ({ initData, username, userId }) => {
  return (
    <section>
      <div className="px-6 py-4">
        <div className="flex">
          <div className="flex-1">
            <h3>{getPageTitle(SESSION_TYPE.COURSE)}</h3>
          </div>
          <div>
            <Link href={`/${username}/${userId}/${SESSION_TYPE.COURSE}`}>
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
            <CourseCard key={item?.session?.sessionId} type="h-card" data={item?.session} userId={userId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseScroll;
