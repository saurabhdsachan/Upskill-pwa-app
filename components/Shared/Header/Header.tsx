import { CalendarIcon, DownloadIcon, HomeIcon, MenuAlt1Icon, ShareIcon } from '@heroicons/react/outline';
import React from 'react';
import Drawer from '../Drawer';

const Header: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <header className="flex h-16 sticky top-0 z-10 bg-white">
      <div className="flex justify-center items-center w-16 p-4">
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
          <MenuAlt1Icon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center p-4">Saurabh Sachan</div>
      <div className="flex justify-center items-center w-16 p-4">
        <ShareIcon className="h-5 w-5" />
      </div>
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="p-4">
          <ul>
            <li className="py-3">
              <HomeIcon className="w-4 h-4 inline mr-4" />
              <span>Home</span>
            </li>
            <li className="py-3">
              <CalendarIcon className="w-4 h-4 inline mr-4" />
              <span>Bookings</span>
            </li>
            <li className="py-3">
              <DownloadIcon className="w-4 h-4 inline mr-4" />
              <span>Download Pep App</span>
            </li>
          </ul>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
