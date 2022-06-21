import emptyLottie from '@public/lotties/empty.json';
import React from 'react';
import LottieAnimation from './LottieAnimation';

interface EmptyStateInterface {
  children?: React.ReactNode;
  title: string;
  message?: string;
}

const EmptyState: React.FC<EmptyStateInterface> = ({ title, message, children }) => {
  return (
    <div className="text-center flex min-h-free justify-center items-center">
      <div>
        <LottieAnimation animationData={emptyLottie} height={140} width={140} loop={false} delay={250} />
        <h3 className="text-base font-medium text-slate-400">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{message}</p>
      </div>
      {children}
    </div>
  );
};
export default React.memo(EmptyState);
