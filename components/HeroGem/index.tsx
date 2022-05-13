import React from 'react';

const index = () => {
  return (
    <div className="flex my-6">
      <div className="flex-1 text-center border-r border-slate-300">
        <p className="text-lg font-bold text-slate-900">46</p>
        <p className="text-xs text-slate-400">Followers</p>
      </div>
      <div className="flex-1 text-center border-r border-slate-300">
        <p className="text-lg font-bold text-slate-900">105</p>
        <p className="text-xs text-slate-400">Following</p>
      </div>
      <div className="flex-1 text-center border-r border-transparent">
        <p className="text-lg font-bold text-slate-900">25</p>
        <p className="text-xs text-slate-400">Sessions</p>
      </div>
    </div>
  );
};

export default index;
