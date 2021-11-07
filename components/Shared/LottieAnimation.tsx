import animation from '@public/lotties/empty.json';
import Lottie from 'lottie-react-web';
import React from 'react';

const LottieAnimation: React.FC = () => {
  return (
    <Lottie
      ariaLabel="Lottie"
      ariaRole="present"
      options={{
        animationData: animation,
      }}
    />
  );
};

export default LottieAnimation;
