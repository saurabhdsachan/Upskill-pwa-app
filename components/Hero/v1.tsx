import React from 'react';

const v1: React.FC = () => {
  return (
    <div className="aspect-h-9 aspect-w-16 rounded-xl shadow-xs overflow-hidden">
      <video
        className="rounded-2xl"
        muted
        loop
        preload="metadata"
        playsInline
        autoPlay
        width={500}
        height={250}
        poster="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&h=340"
      >
        <source
          src="https://res.cloudinary.com/dui8mpatf/video/upload/v1652982097/pep/travel_cxuckh.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default React.memo(v1);
