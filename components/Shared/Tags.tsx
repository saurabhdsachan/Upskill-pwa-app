import React from 'react';

const Tags = ({ data }) => {
  return (
    <div className="relative overflow-auto">
      <ul role="list" className="my-2 overflow-x-auto flex no-scrollbar">
        {data?.map((tag) => (
          <li className="inline px-1 first:pl-4 last:pr-4" key={tag}>
            <a href="#" className="relative inline-flex items-center rounded-full border border-slate-300 px-3 py-0.5">
              <div className="absolute flex-shrink-0 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" aria-hidden="true" />
              </div>
              <div className="ml-3.5 text-sm font-medium capitalize whitespace-nowrap">{tag?.toLowerCase()}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
