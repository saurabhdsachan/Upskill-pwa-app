import animation from '@public/lotties/empty.json';
import Lottie from 'lottie-react-web';
import React from 'react';

type LottieAnimationType = {
  height?: number;
  width?: number;
  animationData?: {};
  loop?: boolean;
};

const LottieAnimation: React.FC<LottieAnimationType> = ({ height, width, animationData, loop = true }) => (
  <Lottie
    height={height}
    width={width}
    ariaLabel="Lottie"
    ariaRole="present"
    options={{
      animationData: animationData || animation,
      loop,
    }}
  />
);

export default LottieAnimation;
