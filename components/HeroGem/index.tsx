import React from 'react';

const HeroGem = ({ followersCount, followingCount, sessionsTaken }) => {
  return (
    <div className="flex my-6">
      <div className="flex-1 text-center border-r border-slate-300">
        <p className="text-lg font-bold text-slate-900">{followersCount}</p>
        <p className="text-xs text-slate-400">Followers</p>
      </div>
      <div className="flex-1 text-center border-r border-slate-300">
        <p className="text-lg font-bold text-slate-900">{followingCount}</p>
        <p className="text-xs text-slate-400">Following</p>
      </div>
      <div className="flex-1 text-center border-r border-transparent">
        <p className="text-lg font-bold text-slate-900">{sessionsTaken}</p>
        <p className="text-xs text-slate-400">Sessions</p>
      </div>
    </div>
  );
};

export default React.memo(HeroGem);
