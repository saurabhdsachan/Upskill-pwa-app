import { UserIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        ' fixed overflow-hidden z-10 bg-slate-900 bg-opacity-50 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all opacity-90 -translate-x-full  ')
      }
    >
      <section
        className={
          ' w-3/4 max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-200 ease-in-out transition-all transform ' +
          (isOpen ? ' translate-x-0 ' : ' -translate-x-full ')
        }
      >
        <article className="relative w-full max-w-lg flex flex-col overflow-y-scroll h-full">
          <div className="flex h-16 border-b border-slate-200">
            <div className="flex-1 px-4 flex items-center">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-500 flex justify-center items-center rounded-full">
                  <UserIcon className="h-4 w-4 text-white" />
                </div>
                <div className="h-10 flex items-center">Login / Signup</div>
              </div>
            </div>
            <button
              className="h-16 w-16 flex justify-center items-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {children}
        </article>
      </section>
      <section
        className="w-screen h-full"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}
