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
                  <svg width={343 / 8} height={108 / 8} fill="none" viewBox="0 0">
                    <g clipPath="url(#a)">
                      <path
                        d="M81.502 40.396c0 11.823-3.386 21.423-10.158 28.8-6.771 7.276-15.008 10.913-24.71 10.913-9.3 0-15.97-3.233-20.012-9.7V108H.698V3.259h23.65v8.337h.606C29.098 4.42 36.374.834 46.784.834c9.804 0 18.041 3.688 24.712 11.065 6.67 7.276 10.006 16.775 10.006 28.497Zm-26.228 0c0-5.154-1.364-9.297-4.093-12.43-2.628-3.233-6.165-4.85-10.612-4.85-4.548 0-8.187 1.617-10.915 4.85-2.73 3.133-4.094 7.276-4.094 12.43 0 5.255 1.314 9.499 3.942 12.732 2.729 3.133 6.367 4.7 10.915 4.7 4.548 0 8.136-1.567 10.764-4.7 2.729-3.233 4.093-7.477 4.093-12.732ZM138.615 51.916l22.134 5.153c-2.831 7.377-7.329 13.087-13.493 17.129-6.166 3.94-13.493 5.911-21.982 5.911-11.825 0-21.629-3.587-29.411-10.762C88.18 62.173 84.34 52.623 84.34 40.7c0-11.722 3.74-21.272 11.219-28.649C103.14 4.573 112.488.834 123.606.834c11.724 0 21.275 3.739 28.653 11.216 7.377 7.478 11.067 17.33 11.067 29.558v4.85h-53.061c2.021 8.995 7.176 13.491 15.463 13.491 5.963 0 10.258-2.677 12.887-8.033Zm-14.554-32.287c-7.277 0-11.825 3.941-13.644 11.823h26.378c-.202-3.738-1.465-6.618-3.79-8.64-2.325-2.122-5.306-3.183-8.944-3.183ZM250.284 40.396c0 11.823-3.387 21.423-10.157 28.8-6.772 7.276-15.009 10.913-24.712 10.913-9.299 0-15.969-3.233-20.011-9.7V108H169.48V3.259h23.65v8.337h.606C197.88 4.42 205.157.834 215.567.834c9.803 0 18.041 3.688 24.711 11.065 6.671 7.276 10.006 16.775 10.006 28.497Zm-26.227 0c0-5.154-1.365-9.297-4.094-12.43-2.628-3.233-6.165-4.85-10.612-4.85-4.548 0-8.186 1.617-10.915 4.85-2.729 3.133-4.093 7.276-4.093 12.43 0 5.255 1.313 9.499 3.941 12.732 2.729 3.133 6.368 4.7 10.916 4.7s8.135-1.567 10.763-4.7c2.729-3.233 4.094-7.477 4.094-12.732Z"
                        fill="#000"
                      />
                      <path
                        d="M254.881 69.385c0-2.425.834-4.471 2.502-6.139 1.743-1.743 3.828-2.614 6.253-2.614 2.35 0 4.359.871 6.026 2.614 1.744 1.668 2.616 3.714 2.616 6.14 0 2.425-.872 4.509-2.616 6.252-1.667 1.667-3.676 2.5-6.026 2.5-2.425 0-4.51-.833-6.253-2.5-1.668-1.743-2.502-3.828-2.502-6.253Z"
                        fill="red"
                      />
                      <path
                        d="M279.418 77.684V44.526h5.164v33.158h-5.164ZM294.924 44.526v5.448h-5.164v-5.448h5.164Zm0 10.753v22.405h-5.164V55.28h5.164ZM320.331 55.279l-8.954 22.595h-4.69l-8.954-22.595h5.59l5.874 16.105h.143l5.874-16.105h5.117ZM337.548 70.958l4.311 1.279c-1.895 4.105-5.101 6.158-9.617 6.158-3.411 0-6.222-1.121-8.433-3.363-2.179-2.243-3.269-5.069-3.269-8.48 0-3.441 1.042-6.3 3.127-8.573 2.084-2.274 4.753-3.41 8.006-3.41 3.158 0 5.78 1.073 7.865 3.22 2.116 2.116 3.189 5.037 3.221 8.764v1.279h-17.008c.252 1.894.963 3.426 2.132 4.594 1.169 1.137 2.637 1.706 4.406 1.706 2.464 0 4.217-1.058 5.259-3.174Zm-5.78-12.41c-1.643 0-2.985.505-4.027 1.515-1.011.98-1.658 2.4-1.942 4.263h11.607c-.127-1.894-.711-3.331-1.753-4.31-1.042-.98-2.338-1.469-3.885-1.469Z"
                        fill="#000"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h343v108H0z" />
                      </clipPath>
                    </defs>
                  </svg>
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
