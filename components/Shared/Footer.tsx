import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="antialiased">
      <div className="container mx-auto px-6">
        <div className="py-12">
          <p className="text-5xl font-extrabold text-slate-300">Made With Love in </p>
          <p className="text-6xl font-extrabold text-yellow-400">India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
