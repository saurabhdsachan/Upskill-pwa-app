import React from 'react';
import LottieAnimation from './LottieAnimation';

interface EmptyStateInterface {
  title: string;
  message: string;
}

const EmptyState: React.FC<EmptyStateInterface> = ({ title, message, children }) => {
  return (
    <div className="bg-gray-200">
      <div className="md:max-w-3xl lg:max-w-lg mx-auto py-32 text-center">
        <LottieAnimation />
        {title && <h2 className="text-xl text-gray-700 mt-6 mb-2">{title}</h2>}
        {message && <p className="text-gray-400">{message}</p>}
        {children}
      </div>
    </div>
  );
};

export default EmptyState;
