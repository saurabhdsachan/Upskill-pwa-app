import emptyLottie from '@public/lotties/empty.json';
import React from 'react';
import LottieAnimation from './LottieAnimation';

const ErrorState = ({ status }: { status?: number }): JSX.Element => {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto">
        <LottieAnimation animationData={emptyLottie} height={300} width={300} />
      </div>
    </div>
  );
};

export default ErrorState;
