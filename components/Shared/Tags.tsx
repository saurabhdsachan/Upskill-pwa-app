import React from 'react';

const Tags = ({ data }) => {
  return (
    <ul role="list" className="my-2 leading-8">
      {data?.map((tag) => (
        <li className="inline mr-1" key={tag}>
          <a href="#" className="relative inline-flex items-center rounded-full border border-slate-300 px-3 py-0.5">
            <div className="absolute flex-shrink-0 flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" aria-hidden="true" />
            </div>
            <div className="ml-3.5 text-sm font-medium capitalize">{tag?.toLowerCase()}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
