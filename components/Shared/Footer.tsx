import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="antialiased border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-6 gap-4">Footer</div>
      </div>
    </footer>
  );
};

export default Footer;
