import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CarouselNavButton from './Buttons';

const SliderWrapper = styled.div`
  .slick-list {
    overflow: visible !important;
  }
`;

const settings = {
  initialSlide: 1,
  lazyLoad: 'ondemand',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  mobileFirst: true,
  accessibility: true,
  focusOnSelect: false,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export enum position {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

interface CarouselInterface {
  centerPadding: string;
  centerMode: boolean;
  position: position;
  customButtons: boolean;
}

const Carousel: React.FC<CarouselInterface> = ({ children, centerPadding, centerMode, position, customButtons }) => {
  const sliderRef = useRef<Slider>(null);

  const renderButtons = () => (
    <div className="grid gap-4 xl:gap-8 grid-cols-2 mx-auto w-full absolute -top-10 lg:-top-14 ">
      <CarouselNavButton flow="left" onClick={() => sliderRef?.current?.slickPrev()} />
      <CarouselNavButton flow="right" onClick={() => sliderRef?.current?.slickNext()} />
    </div>
  );

  return (
    <>
      {position === 'top' && customButtons && renderButtons()}
      <SliderWrapper className="overflow-hidden">
        <Slider
          {...settings}
          arrows={!customButtons}
          centerMode={centerMode}
          centerPadding={centerPadding}
          ref={sliderRef}
        >
          {children}
        </Slider>
      </SliderWrapper>
      {position !== 'top' && customButtons && renderButtons()}
    </>
  );
};

export default Carousel;
