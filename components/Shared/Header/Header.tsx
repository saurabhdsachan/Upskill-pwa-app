import CustomerStoriesNav from '@components/Shared/CustomerStoriesNav';
import ShopCategories from '@components/Shared/ShopCategories';
import { ChevronDownIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import SubNav from '../SubNav';
import UserNav from './UserNav';

const Header: React.FC = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);

  const closeSubNav = () => setIsOpenSubNav(false);

  const openSubNav = () => setIsOpenSubNav(true);

  const router = useRouter();

  const [subNavContent, setSubNavContent] = useState('stories');

  const getSubNavContent = useCallback(() => {
    if (!subNavContent) {
      return null;
    } else {
      switch (subNavContent) {
        case 'stories':
          return <CustomerStoriesNav />;
        case 'shop':
          return <ShopCategories />;
        default:
          return null;
      }
    }
  }, [subNavContent]);

  const getSubNavHeader = useCallback(() => {
    if (!subNavContent) {
      return null;
    } else {
      switch (subNavContent) {
        case 'stories':
          return 'Customer Stories';
        case 'shop':
          return 'Shop By Category';
        default:
          return null;
      }
    }
  }, [subNavContent]);

  const isSubNavHover = useMemo(() => {
    return subNavContent === 'shop' ? true : false;
  }, [subNavContent]);

  return (
    <>
      <a
        className="text-sm py-2 px-5 bg-gray-50 rounded-lg absolute top-1 left-1 focus:z-50 focus:ring-1 focus:ring-gray-900 focus:outline-none"
        href="#main"
      >
        Skip to content
      </a>
      <header className={`bg-white sticky top-0 z-50`}>
        <div className="container px-4 mx-auto">
          <div className="h-20 flex items-center">
            <Link href="/">
              <a
                className="focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none inline-block rounded-md pr-1 mr-10"
                aria-label="logo"
              >
                <svg height="30" width="139" viewBox="0 0 291 63" fill="none" baseProfile="full">
                  <path
                    d="M51 0H12C5.373 0 0 5.373 0 12v39c0 6.627 5.373 12 12 12h39c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M47.445 23.799l-13.714-9.147a3.87 3.87 0 00-4.3 0L15.715 23.8A3.846 3.846 0 0014 27.003v17.718a3.857 3.857 0 003.852 3.854h12.212a.97.97 0 000-1.938H17.852a1.916 1.916 0 01-1.915-1.914V26.996c.001-.64.321-1.237.853-1.592l13.716-9.142c.65-.437 1.5-.437 2.15 0l13.716 9.142c.533.355.853.952.853 1.592v17.622a1.912 1.912 0 01-2.09 1.908 24.845 24.845 0 01-13.31-5.194c-3.558-2.895-5.517-6.48-5.58-10.157a2.254 2.254 0 012.015-2.354 2.176 2.176 0 012.343 2.174.97.97 0 101.938.007 2.18 2.18 0 114.362 0 12.115 12.115 0 01-2.462 7.106.97.97 0 001.563 1.14 13.982 13.982 0 002.843-8.238 4.116 4.116 0 00-7.269-2.653 4.086 4.086 0 00-3.447-1.462 4.193 4.193 0 00-3.814 4.32c.144 8.618 9.215 16.194 20.65 17.253a3.852 3.852 0 004.197-3.84V27.004a3.846 3.846 0 00-1.719-3.204z"
                    fill="#F9FDFF"
                  />
                  <path
                    d="M92.95 47.315c2.31 0 4.305-.427 5.985-1.282 1.68-.855 2.955-2.003 3.825-3.443.87-1.44 1.305-3 1.305-4.68 0-1.95-.465-3.525-1.395-4.725-.93-1.2-2.04-2.1-3.33-2.7-1.29-.6-2.955-1.2-4.995-1.8-1.5-.45-2.662-.848-3.487-1.192-.826-.345-1.516-.795-2.07-1.35-.555-.556-.833-1.253-.833-2.093 0-1.2.368-2.115 1.103-2.745.734-.63 1.717-.945 2.947-.945 1.41 0 2.543.352 3.398 1.058.854.704 1.312 1.597 1.372 2.677h6.93c-.21-2.82-1.327-5.017-3.352-6.592-2.025-1.575-4.658-2.363-7.898-2.363-2.16 0-4.08.367-5.76 1.102-1.68.735-2.985 1.793-3.915 3.173-.93 1.38-1.395 3-1.395 4.86 0 1.98.457 3.563 1.372 4.748.915 1.184 2.01 2.07 3.285 2.654 1.275.586 2.933 1.178 4.973 1.778 1.5.42 2.677.803 3.532 1.148.856.344 1.568.817 2.138 1.417.57.6.855 1.365.855 2.295 0 1.14-.42 2.063-1.26 2.768-.84.705-1.995 1.057-3.465 1.057-1.44 0-2.572-.375-3.397-1.125-.826-.75-1.283-1.77-1.373-3.06h-6.75c.03 1.92.555 3.585 1.575 4.995 1.02 1.41 2.407 2.49 4.162 3.24s3.728 1.125 5.918 1.125zm22.86 11.565V43.445c.87 1.14 2.002 2.085 3.397 2.835s3.008 1.125 4.838 1.125c2.13 0 4.057-.54 5.782-1.62 1.725-1.08 3.091-2.602 4.096-4.567 1.005-1.966 1.507-4.223 1.507-6.773s-.502-4.793-1.507-6.727c-1.005-1.936-2.371-3.428-4.096-4.478-1.725-1.05-3.652-1.575-5.782-1.575-1.83 0-3.458.383-4.883 1.148-1.425.765-2.542 1.717-3.352 2.857v-3.6h-6.3v36.81h6.3zm6.57-17.01a6.294 6.294 0 01-3.218-.877c-1.005-.586-1.815-1.433-2.43-2.543-.615-1.11-.922-2.415-.922-3.915s.307-2.805.922-3.915c.615-1.11 1.425-1.957 2.43-2.543a6.294 6.294 0 013.218-.877c1.17 0 2.258.285 3.263.855 1.005.57 1.814 1.402 2.429 2.497.615 1.096.923 2.393.923 3.893 0 1.53-.308 2.85-.923 3.96-.615 1.11-1.424 1.965-2.429 2.565-1.005.6-2.093.9-3.263.9zm27.36 5.535c1.86 0 3.502-.383 4.927-1.148 1.425-.764 2.543-1.732 3.353-2.902V47h6.345V22.07h-6.345v3.555c-.84-1.14-1.958-2.085-3.353-2.835-1.395-.75-3.022-1.125-4.882-1.125-2.13 0-4.057.525-5.782 1.575-1.725 1.05-3.09 2.55-4.095 4.5-1.005 1.95-1.508 4.185-1.508 6.705 0 2.55.503 4.807 1.508 6.773 1.005 1.964 2.37 3.487 4.095 4.567 1.725 1.08 3.637 1.62 5.737 1.62zm1.665-5.535c-1.14 0-2.213-.3-3.217-.9-1.005-.6-1.815-1.462-2.43-2.587-.615-1.126-.923-2.438-.923-3.938s.308-2.797.923-3.893c.615-1.095 1.417-1.927 2.407-2.497a6.38 6.38 0 013.24-.855c1.17 0 2.265.293 3.285.878s1.83 1.425 2.43 2.52c.6 1.095.9 2.407.9 3.937 0 1.53-.3 2.843-.9 3.938-.6 1.095-1.41 1.934-2.43 2.52a6.495 6.495 0 01-3.285.877zm29.835 5.535c3.06 0 5.61-.795 7.65-2.385 2.04-1.59 3.405-3.735 4.095-6.435h-6.795c-.78 2.28-2.445 3.42-4.995 3.42-1.8 0-3.225-.653-4.275-1.958-1.05-1.304-1.575-3.142-1.575-5.512 0-2.4.525-4.252 1.575-5.557 1.05-1.306 2.475-1.958 4.275-1.958 1.26 0 2.317.308 3.172.922.855.616 1.463 1.463 1.823 2.543h6.795c-.69-2.79-2.047-4.957-4.072-6.502-2.025-1.546-4.583-2.318-7.673-2.318-2.4 0-4.53.533-6.39 1.598-1.86 1.064-3.315 2.564-4.365 4.5-1.05 1.934-1.575 4.192-1.575 6.772s.525 4.838 1.575 6.773c1.05 1.934 2.505 3.434 4.365 4.5 1.86 1.065 3.99 1.597 6.39 1.597zm27.27 0c2.97 0 5.475-.773 7.515-2.318s3.42-3.517 4.14-5.917h-6.795c-.99 2.01-2.655 3.015-4.995 3.015-1.62 0-2.985-.51-4.095-1.53-1.11-1.02-1.74-2.43-1.89-4.23h18.225c.12-.72.18-1.53.18-2.43 0-2.43-.518-4.582-1.553-6.457a10.766 10.766 0 00-4.364-4.343c-1.875-1.02-3.998-1.53-6.368-1.53-2.46 0-4.635.525-6.525 1.575-1.89 1.05-3.36 2.55-4.41 4.5-1.05 1.95-1.575 4.215-1.575 6.795 0 2.55.533 4.8 1.598 6.75 1.065 1.95 2.55 3.458 4.455 4.523 1.905 1.065 4.057 1.597 6.457 1.597zm5.76-15.21h-11.835c.24-1.68.893-2.992 1.958-3.938 1.065-.945 2.377-1.417 3.937-1.417 1.65 0 3.045.488 4.185 1.462 1.14.976 1.725 2.273 1.755 3.893zM228.58 19.1c1.11 0 2.025-.353 2.745-1.058.72-.705 1.08-1.582 1.08-2.632s-.36-1.928-1.08-2.633c-.72-.704-1.635-1.057-2.745-1.057-1.14 0-2.077.352-2.812 1.057-.735.706-1.103 1.583-1.103 2.633s.368 1.927 1.103 2.633c.735.704 1.672 1.057 2.812 1.057zm-4.815 39.78c2.55 0 4.507-.608 5.872-1.823 1.365-1.215 2.048-3.202 2.048-5.962V22.07h-6.3v29.07c0 .84-.195 1.447-.585 1.822-.39.375-1.065.563-2.025.563h-1.8v5.355h2.79zm25.2-11.475c2.43 0 4.627-.532 6.592-1.598 1.965-1.065 3.525-2.572 4.68-4.522 1.155-1.95 1.733-4.2 1.733-6.75s-.562-4.8-1.687-6.75c-1.125-1.95-2.663-3.457-4.613-4.523-1.95-1.064-4.125-1.597-6.525-1.597-2.4 0-4.575.533-6.525 1.598-1.95 1.064-3.487 2.572-4.612 4.522-1.125 1.95-1.688 4.2-1.688 6.75s.547 4.8 1.642 6.75c1.095 1.95 2.603 3.458 4.523 4.523 1.92 1.065 4.08 1.597 6.48 1.597zm0-5.49c-1.8 0-3.292-.637-4.477-1.913-1.185-1.275-1.778-3.097-1.778-5.467 0-2.37.608-4.192 1.823-5.467 1.215-1.276 2.722-1.913 4.522-1.913 1.8 0 3.322.637 4.567 1.912 1.245 1.276 1.868 3.098 1.868 5.468 0 1.59-.3 2.94-.9 4.05-.6 1.11-1.403 1.943-2.408 2.498a6.552 6.552 0 01-3.217.832zM275.02 58.79l15.435-36.72h-6.705l-6.525 17.415-6.435-17.415h-7.065l9.99 24.3-5.4 12.42h6.705z"
                    fill="#111927"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="63" y2="63" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5296E" />
                      <stop offset="1" stopColor="#F39C12" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </Link>
            <div className="flex-1 h-full">
              <nav aria-label="Primary" className="h-full">
                <ul className="h-full flex items-center">
                  <li className="inline-block">
                    <Link href="/interior-designs">
                      <a
                        className={`text-sm py-1 px-2.5 hover:text-red-500 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/interior-designs' ? 'text-red-600' : 'text-gray-900'
                        }`}
                      >
                        Ideas
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/collection">
                      <a
                        className={`text-sm py-1 px-2.5 hover:text-red-500 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/collection' ? 'text-red-600' : 'text-gray-900'
                        }`}
                      >
                        Collection
                      </a>
                    </Link>
                  </li>
                  <li className="flex">
                    <button
                      type="button"
                      className={`hover:text-red-500 text-sm py-1 px-2.5 flex items-center rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                        isOpenSubNav && subNavContent === 'stories' ? 'text-red-500' : 'text-gray-700'
                      }`}
                      onClick={
                        isOpenSubNav
                          ? () => {
                              closeSubNav();
                              setSubNavContent('');
                            }
                          : () => {
                              openSubNav();
                              setSubNavContent('stories');
                            }
                      }
                    >
                      Stories{' '}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform delay-75 duration-300 ease-in-out transform ${
                          isOpenSubNav && subNavContent === 'stories' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </li>
                  <li className="inline-block">
                    <Link href="/pricing">
                      <a
                        className={`text-sm py-1 px-2.5 hover:text-red-500 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/pricing' ? 'text-red-600' : 'text-gray-900'
                        }`}
                      >
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/help">
                      <a
                        className={`text-sm py-1 px-2.5 hover:text-red-500 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/help' ? 'text-red-600' : 'text-gray-900'
                        }`}
                      >
                        Help
                      </a>
                    </Link>
                  </li>
                  <li
                    className="flex h-full items-center"
                    onMouseEnter={() => {
                      openSubNav();
                      setSubNavContent('shop');
                    }}
                    onMouseLeave={() => {
                      closeSubNav();
                      // setSubNavContent('');
                    }}
                  >
                    <button
                      type="button"
                      className={`hover:text-red-500 text-sm py-1 px-2.5 flex items-center rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                        isOpenSubNav && subNavContent === 'shop' ? 'text-red-500' : 'text-gray-700'
                      }`}
                    >
                      Shop{' '}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform delay-75 duration-300 ease-in-out transform ${
                          isOpenSubNav && subNavContent === 'shop' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-2/5 text-right">
              <Link href="/search">
                <a
                  className={`text-gray-700 text-xs py-1 px-2 mx-2 rounded-lg border hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                    router.asPath === '/search' ? 'border-gray-200 text-red-600' : 'border-transparent'
                  }`}
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="inline h-4 w-4" />
                </a>
              </Link>
              <Link href="/shop">
                <a className="text-gray-700 text-xs py-1 px-2 mx-2 rounded-lg border border-transparent hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none">
                  <span className="sr-only">Shopping</span>
                  <ShoppingBagIcon className="inline h-4 w-4" />
                </a>
              </Link>
              <Link href="/new-project">
                <a className="text-white text-xs py-1.5 px-3 mx-2 rounded-lg border border-gray-900 bg-gray-900 hover:bg-gray-700">
                  Start Project
                </a>
              </Link>
              <UserNav />
            </div>
          </div>
        </div>
      </header>
      <SubNav subNavState={isOpenSubNav} closeSubNav={closeSubNav} onCloseCallback={() => {}} hoverNav={isSubNavHover}>
        <SubNav.Header>{getSubNavHeader()}</SubNav.Header>
        <SubNav.Body>{getSubNavContent()}</SubNav.Body>
      </SubNav>
    </>
  );
};

export default Header;
