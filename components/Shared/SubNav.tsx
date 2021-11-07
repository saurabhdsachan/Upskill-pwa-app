import { Dialog, Transition } from '@headlessui/react';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { Fragment } from 'react';

const SubNav = ({ subNavState, closeSubNav }: { subNavState: boolean; closeSubNav: () => void }): JSX.Element => {
  return (
    <Transition appear show={subNavState} as={Fragment}>
      <Dialog
        as="div"
        className="fixed bg-gray-900 bg-opacity-75 inset-0 z-40 overflow-y-auto backdrop-filter backdrop-blur firefox:bg-opacity-90"
        onClose={closeSubNav}
      >
        <div className="min-h-screen text-center" aria-label="secondary">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="opacity-0  -translate-y-60"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-60"
          >
            <div className="w-full overflow-hidden relative pt-36 pb-16 text-left bg-white shadow-xl">
              <div className="container mx-auto px-4">
                <Dialog.Title as="h3" className="text-3xl mb-6">
                  Spacejoy Stories
                </Dialog.Title>
                <div className="grid lg:gap-4 xl:gap-8 lg:grid-cols-4 xl:grid-cols-5 max-w-800 max-w-screen-xl">
                  <div className="lg:col-start-1 lg:col-end-3 xl:col-start-1 xl:col-end-3">
                    <div className="grid gap-8 grid-cols-3">
                      <div className="col-start-1 col-end-2 relative">
                        <div className="next-image-fix bg-gray-200 rounded-xl">
                          <Image
                            className="rounded-xl filter contrast-125"
                            src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_300,w_300/v1624244229/web/avatars/Monica-Hall_ld1m5a.jpg"
                            alt="spacejoy happy customer"
                            height={'300'}
                            width={'300'}
                            layout="responsive"
                          />
                        </div>
                      </div>
                      <div className="col-start-2 col-end-4">
                        <h3 className="text-xl mb-2 font-poppins">How Spacejoy has transform Marisa’s Home</h3>
                        <p className="text-sm mb-4 text-gray-600">
                          Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
                          neque sem pretium metus, quis mollis nisl nunc et massa.
                        </p>
                        <button
                          type="button"
                          className="shadow-xs hover:shadow-md text-xs text-white py-2 px-5 rounded-full bg-gray-900 tracking-wide focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
                          onClick={closeSubNav}
                        >
                          Read my story
                        </button>
                        <button
                          type="button"
                          className="text-gray-700 text-xs py-2 px-5 ml-4 rounded-full border border-gray-600 hover:bg-gray-50 tracking-wide focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
                          onClick={closeSubNav}
                        >
                          Read all stories
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-start-3 lg:col-end-4 xl:col-start-4 xl:col-end-5">
                    <div className="shadow-sm rounded-xl bg-gray-100 h-full">
                      <div className="flex h-full p-4 flex-col justify-end">
                        <div>
                          <Image
                            src="https://res.cloudinary.com/spacejoy/image/upload/h_300,w_300/v1622188242/spj-v2/3d-icons/spj-25_dhewua.png"
                            alt="No markups"
                            height={'55'}
                            width={'75'}
                            layout="intrinsic"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg mt-2 text-red-700 font-poppins">Design Matters</h3>
                          <p className="text-sm mb-2">Tips & Guides</p>
                          <ArrowRightIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-start-4 lg:col-end-5 xl:col-start-5 xl:col-end-6">
                    <div className="shadow-sm rounded-xl bg-green-100 h-full">
                      <div className="flex h-full p-4 flex-col justify-end">
                        <div className="text-left">
                          <Image
                            src="https://res.cloudinary.com/spacejoy/image/upload/h_300,w_300/v1622188232/spj-v2/3d-icons/spj-13_khzmql.png"
                            alt="No markups"
                            height={'75'}
                            width={'75'}
                            layout="intrinsic"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg mt-2 text-green-700 font-poppins">Customer Stories</h3>
                          <p className="text-sm mb-2">100% Happiness Delivered</p>
                          <ArrowRightIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SubNav;
