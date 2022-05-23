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
    <div className="text-center flex min-h-free justify-center items-center">
      <div>
        <LottieAnimation animationData={errorLottie} height={200} width={200} />
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{message}</p>
      </div>
      {children}
    </div>
  );
};
export default React.memo(EmptyState);
