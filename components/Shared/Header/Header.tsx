import { MenuAlt1Icon, ShareIcon } from '@heroicons/react/outline';
import React from 'react';

const Header = () => {
  return (
    <header className="flex h-16">
      <div className="flex justify-center items-center w-20 p-4">
        <MenuAlt1Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 flex justify-center items-center p-4">Saurabh Sachan</div>
      <div className="flex justify-center items-center w-20 p-4">
        <ShareIcon className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
