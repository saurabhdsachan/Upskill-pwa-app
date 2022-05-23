import { RefreshIcon } from '@heroicons/react/outline';
import errorLottie from '@public/lotties/error.json';
import { useRouter } from 'next/router';
import React from 'react';
import LottieAnimation from './LottieAnimation';

interface EmptyStateInterface {
  children?: React.ReactNode;
  title: string;
  message: string;
}

const EmptyState: React.FC<EmptyStateInterface> = ({ title, message, children }) => {
  const router = useRouter();

  return (
    <div className="text-center">
      <div className="text-center">
        <LottieAnimation animationData={errorLottie} />
        <h3 className="mt-10 text-base font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{message}</p>
        <div className="mt-6">
          <button
            onClick={() => router.reload()}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-900"
          >
            <RefreshIcon className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
            Refresh
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};
export default React.memo(EmptyState);
