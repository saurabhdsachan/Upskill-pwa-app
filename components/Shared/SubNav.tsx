import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

interface StaticComponents {
  Body?: React.FC;
  Button?: React.FC;
  Header?: React.FC;
}
interface ModalProps {
  subNavState: boolean;
  closeSubNav: () => void;
  onCloseCallback?: () => void;
  hoverNav?: boolean;
}
const SubNav: React.FC<ModalProps> & StaticComponents = ({
  children,
  subNavState,
  closeSubNav,
  onCloseCallback,
  hoverNav,
}) => {
  const [subNavHoverState, setSubNavState] = useState(false);
  const handleHover = (value) => {
    if (hoverNav) {
      setSubNavState(value);
    }
  };

  return (
    <Transition appear show={subNavHoverState || subNavState} as={Fragment}>
      <Dialog
        as="div"
        className="fixed bg-gray-900 bg-opacity-75 inset-0 z-40 overflow-y-auto backdrop-filter backdrop-blur firefox:bg-opacity-90"
        onClose={() => {
          closeSubNav();
          onCloseCallback();
          setSubNavState(false);
        }}
      >
        <div
          className="min-h-screen text-center"
          aria-label="secondary"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
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
            <div className="container mx-auto overflow-hidden relative pt-36 pb-8 text-left bg-white shadow-xl rounded-b-lg">
              <div className="container mx-auto px-8">
                <Dialog.Title as="h3" className="text-3xl mb-6">
                  {children[0]}
                </Dialog.Title>
                <div>{children[1]}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
SubNav.Button = ({ children }) => <>{children}</>;
SubNav.Header = ({ children }) => <>{children}</>;
SubNav.Body = ({ children }) => <>{children}</>;

export default SubNav;
