import { ArrowLeftIcon, CalendarIcon, DownloadIcon, HomeIcon, MenuAlt1Icon, ShareIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Drawer from '../Drawer';

const Header: React.FC = ({ backflow, title }: { backflow: boolean; title?: string }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="flex h-16 sticky top-0 z-10 bg-white">
      {backflow ? (
        <div className="flex flex-1">
          <div className="flex justify-center items-center w-16 px-6">
            <button className="btn btn-primary" onClick={handleGoBack}>
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
          </div>
          {title && <div className="flex-1 flex items-center">{title}</div>}
        </div>
      ) : (
        <>
          <div className="flex flex-1">
            <div className="flex justify-center items-center w-16 px-6">
              <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                <MenuAlt1Icon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 flex items-center">Chef Jordan</div>
            <div className="flex justify-center items-center p-4">
              <div className="p-2 rounded-2xl mr-2">
                <ShareIcon className="h-4 w-4" />
              </div>
              <div className="p-2 rounded-2xl">
                <CalendarIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
          <Drawer setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className="p-6 flex-1">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <ul>
                    <li className="py-3">
                      <Link href="/">
                        <a>
                          <HomeIcon className="w-4 h-4 inline mr-4" />
                          <span>Home</span>
                        </a>
                      </Link>
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
                <div className="text-center">
                  <p className="text-xs text-slate-600">Powered by</p>
                  <h3>Pep.live</h3>
                </div>
              </div>
            </div>
          </Drawer>
        </>
      )}
    </header>
  );
};

export default Header;
