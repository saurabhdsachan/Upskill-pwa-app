import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="antialiased">
      <p className="antialiased text-center text-xs text-slate-600 py-6">{currentYear}</p>
    </footer>
  );
};

export default Footer;
