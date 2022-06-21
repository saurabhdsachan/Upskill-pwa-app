import loadingLottie from '@public/lotties/loading.json';
import React from 'react';
import LottieAnimation from './LottieAnimation';

const LoadingState: React.FC = () => {
  return (
    <div className="text-center bg-white z-10 flex min-h-free justify-center items-center absolute inset-0">
      <LottieAnimation animationData={loadingLottie} height={50} width={150} />
    </div>
  );
};
export default React.memo(LoadingState);
