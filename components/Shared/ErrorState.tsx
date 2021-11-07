import React from 'react';
import LottieAnimation from './LottieAnimation';
import SectionTitle from './SectionTitle';

const ErrorState = ({ status }: { status: number }): JSX.Element => {
  return (
    <div className="container mx-auto px-4">
      <div className="h-1/3 w-1/3 mx-auto mt-28">
        <LottieAnimation />
      </div>
      {status !== 0 ? (
        <SectionTitle
          title="There is an error"
          feature={`${status}`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid quam eveniet, voluptatum animi ducimus fugit odit modi molestiae fugiat pariatur laudantium sunt laborum sapiente quo. Consequatur veniam debitis reprehenderit?"
        />
      ) : (
        <SectionTitle
          title="Connection seems offline"
          feature={`${status}`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid quam eveniet, voluptatum animi ducimus fugit odit modi molestiae fugiat pariatur laudantium sunt laborum sapiente quo. Consequatur veniam debitis reprehenderit?"
        />
      )}
    </div>
  );
};

export default ErrorState;
