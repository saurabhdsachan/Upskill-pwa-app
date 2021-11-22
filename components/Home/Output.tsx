import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../Shared/SectionTitle';

const MoveSlideshow = keyframes`
 to {
    transform: translateX(-100%)
  }
`;

const OutputGallery = styled.div`
  max-width: 3840px;
  overflow: hidden;
  transform: translateZ(0);
  white-space: nowrap;
  font-size: 0;
  picture {
    vertical-align: middle;
    transform: translateZ(0);
    animation: ${MoveSlideshow} 120s linear infinite;
    img {
      max-width: initial;
    }
  }
`;

const Output: React.FC = () => {
  return (
    <div>
      <SectionTitle
        feature="Output"
        title="Results that stun you"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <OutputGallery>
        <picture className="inline-block">
          <source
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-mobile_qdp793.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-mobile_2x_edyzqk.jpg 2x"
            media="(max-width: 768px)"
          />
          <source
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-medium_qaynoo.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-medium_2x_depdeo.jpg 2x"
            media="(max-width: 1440px)"
          />
          <source srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery_nskrrd.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229338/spj-v2/home-gallery/Gallery_2x_gl3hjj.jpg 2x" />
          <img
            src="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery_nskrrd.jpg"
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229338/spj-v2/home-gallery/Gallery_2x_gl3hjj.jpg 2x"
            alt="Home Gallery"
          />
        </picture>
        <picture className="inline-block ml-4 lg:ml-6 2xl:ml-8">
          <source
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-mobile_qdp793.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-mobile_2x_edyzqk.jpg 2x"
            media="(max-width: 768px)"
          />
          <source
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-medium_qaynoo.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery-medium_2x_depdeo.jpg 2x"
            media="(max-width: 1440px)"
          />
          <source srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery_nskrrd.jpg 1x, https://res.cloudinary.com/spacejoy/image/upload/v1626229338/spj-v2/home-gallery/Gallery_2x_gl3hjj.jpg 2x" />
          <img
            src="https://res.cloudinary.com/spacejoy/image/upload/v1626229337/spj-v2/home-gallery/Gallery_nskrrd.jpg"
            srcSet="https://res.cloudinary.com/spacejoy/image/upload/v1626229338/spj-v2/home-gallery/Gallery_2x_gl3hjj.jpg 2x"
            alt="Home Gallery"
          />
        </picture>
      </OutputGallery>
    </div>
  );
};

export default React.memo(Output);
