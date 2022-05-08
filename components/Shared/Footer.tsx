import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="antialiased">
      <div className="container mx-auto px-6">
        <div className="py-12">
          <p className="text-6xl font-extrabold text-slate-200">
            Made <br />
            With Love
            <br /> in <span className="text-yellow-400">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
