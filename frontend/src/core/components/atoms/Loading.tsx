import animationData from '@core/assets/animations/loading-dots.json';
import React from 'react';
import Lottie from 'react-lottie';

interface Props {
  size?: number;
}

export const Loading: React.FunctionComponent<Props> = ({ size = 150 }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={options} height={size} width={size} />;
};
