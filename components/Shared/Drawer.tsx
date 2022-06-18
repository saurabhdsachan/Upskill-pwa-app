import { useAuthStore } from '@context/authContext';
import { UserIcon, XIcon } from '@heroicons/react/outline';
import { blurredBgImage } from '@public/images/bg-base-64';
import { getImageUrl } from '@utils/helpers';
import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { Else, If, Then } from 'react-if';
import Button from './Button/Button';
import HeroName from './HeroName';

const Drawer = observer(({ children, isOpen, setIsOpen }) => {
  const { authData } = useAuthStore();

  return (
    <div
      className={
        'fixed overflow-hidden h-full z-10 bg-slate-900 bg-opacity-50 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-800 translate-x-0  '
          : ' transition-all opacity-90 -translate-x-full  ')
      }
    >
      <section
        className={
          'w-3/4 max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isOpen ? ' translate-x-0 ' : ' -translate-x-full ')
        }
      >
        <article className="relative w-full max-w-lg flex flex-col overflow-y-scroll h-full">
          <div className="flex">
            <If condition={authData?.userId}>
              <Then>
                <div className="flex-1 p-4 flex items-center">
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-slate-500 flex justify-center items-center rounded-full">
                      <If condition={authData?.profileImgUrl}>
                        <Then>
                          <Image
                            className="rounded-full object-cover"
                            src={getImageUrl(authData?.profileImgUrl, { height: 180, width: 180 })}
                            alt={authData?.name}
                            width={180}
                            height={180}
                            placeholder="blur"
                            layout="intrinsic"
                            blurDataURL={blurredBgImage}
                          />
                        </Then>
                        <Else>
                          <UserIcon className="h-4 w-4 text-white" aria-hidden="true" />
                          <span className="sr-only">User</span>
                        </Else>
                      </If>
                    </div>
                    <div className="h-10 flex-1 flex items-center justify-center">
                      <HeroName name={authData?.name || authData?.number} username={authData?.username} />
                    </div>
                  </div>
                </div>
              </Then>
              <Else>
                <div className="flex-1 p-4 flex items-center">
                  <Link href="/auth">
                    <a>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-slate-500 flex justify-center items-center rounded-full">
                          <UserIcon className="h-4 w-4 text-white" aria-hidden="true" />
                          <span className="sr-only">User</span>
                        </div>
                        <div className="h-10 flex items-center">Login / Signup</div>
                      </div>
                    </a>
                  </Link>
                </div>
              </Else>
            </If>
            <Button raw className="h-20 w-20" onClick={() => setIsOpen(false)}>
              <XIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close panel</span>
            </Button>
          </div>
          {children}
        </article>
      </section>
      <section className="w-screen h-full" onClick={() => setIsOpen(false)} />
    </div>
  );
});

export default Drawer;
