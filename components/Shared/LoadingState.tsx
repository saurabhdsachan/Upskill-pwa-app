import loadingLottie from '@public/lotties/loading.json';
import React from 'react';
import LottieAnimation from './LottieAnimation';

const LoadingState: React.FC = () => {
  return (
    <div className="text-center flex min-h-free justify-center items-center">
      <LottieAnimation animationData={loadingLottie} height={100} width={100} />
    </div>
  );
};
export default React.memo(LoadingState);
