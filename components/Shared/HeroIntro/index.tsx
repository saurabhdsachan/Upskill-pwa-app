import React from 'react';

const index: React.FC<Pick<IUser, 'name' | 'username'>> = ({ name, username }) => {
  return (
    <div className="my-4">
      <p className="text-state-900 text-lg font-bold">{name}</p>
      <small className="text-slate-400 text-sm">{username}</small>
    </div>
  );
};

export default index;
