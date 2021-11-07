import Image from 'next/image';
import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';

const ParallaxStyled = styled.div`
  .parallax {
    height: 500px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
  }
`;

const Parallax: React.FC = () => {
  return (
    <ParallaxStyled>
      <Controller>
        <Scene indicators={false} duration="200%" triggerHook="onEnter">
          <Timeline wrapper={<div className="parallax" />}>
            <Tween
              position="0"
              from={{
                yPercent: -50,
              }}
              to={{
                yPercent: 0,
              }}
            >
              <Image
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1600/v1622190830/spj-v2/spj-entry-way_h8ep62.jpg"
                alt="spacejoy Output"
                layout="fill"
              />
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </ParallaxStyled>
  );
};

export default Parallax;
