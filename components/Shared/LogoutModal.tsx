import { Dialog, Transition } from '@headlessui/react';
import { LogoutIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import Button from './Button/Button';

interface ILogoutModal {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<ILogoutModal> = ({ isOpen, onConfirm, onCancel }) => {
  const closeModal = () => onCancel();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed bg-slate-900 bg-opacity-75 inset-0 z-50 overflow-y-auto backdrop-filter backdrop-blur firefox:bg-opacity-90"
          onClose={closeModal}
        >
          <div className="min-h-screen px-6 text-center">
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
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Confirm logout?
                </Dialog.Title>

                <div className="mt-4 flex space-x-4">
                  <Button type="button" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="button" bg="orange" onClick={onConfirm}>
                    Yes, Logout <LogoutIcon className="ml-2 h-4 w-4 inline" />
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LogoutModal;
