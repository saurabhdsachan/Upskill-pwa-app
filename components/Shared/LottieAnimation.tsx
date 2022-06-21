import animation from '@public/lotties/empty.json';
import Lottie from 'lottie-react-web';
import React, { useEffect, useState } from 'react';

type LottieAnimationType = {
  height?: number;
  width?: number;
  animationData?: {};
  loop?: boolean;
  delay?: number;
};

const LottieAnimation: React.FC<LottieAnimationType> = ({ height, width, animationData, loop = true, delay }) => {
  const [speed, setSpeed] = useState(delay ? 0 : 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpeed(1);
    }, delay);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Lottie
      height={height}
      width={width}
      ariaLabel="Lottie"
      ariaRole="present"
      speed={speed}
      options={{
        animationData: animationData || animation,
        loop,
      }}
    />
  );
};

export default LottieAnimation;
