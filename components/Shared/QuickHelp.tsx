import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon, LightBulbIcon } from '@heroicons/react/outline';
import { classNames } from '@utils/helpers';
import { Fragment } from 'react';

const QuickHelp = () => {
  return (
    <div className="mt-4">
      <LightBulbIcon className="w-10 h-10 text-slate-400" />
      <h2 className="text-xl font-bold mb-6 text-slate-400">How to join</h2>

      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button as={Fragment}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4>Option 1 - Through Expert&apos;s Pep Website</h4>
                </div>
                <ChevronRightIcon className={classNames(open ? 'rotate-90' : '', 'transform w-4 h-4')} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2">
              <p className="prose prose-sm">
                Click on the expert&apos;s Pep website link → Login/Signup → click on ‘Bookings‘ → You will see booking
                details with ‘Join Now‘ button before 10 min of the start time
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <hr className="my-4" />
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button as={Fragment}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4>Option 2 - Through Pep App</h4>
                </div>
                <ChevronRightIcon className={classNames(open ? 'rotate-90' : '', 'transform w-4 h-4')} />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mt-2">
                <p className="prose prose-sm">
                  Install Pep app from Google Playstore → Login/Signup → click on ‘Bookings‘ tab → You will see booking
                  details with ‘Join Now‘ button before 10 min of the start time
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default QuickHelp;
