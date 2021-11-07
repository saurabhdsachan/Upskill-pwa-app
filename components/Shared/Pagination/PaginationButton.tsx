import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

export interface PaginationButtonInterface {
  label: string;
  active: boolean;
  onClick: (index: number) => void;
  disabled: boolean;
  buttonIndex: number;
}

const PaginationButton: React.FC<PaginationButtonInterface> = ({ label, onClick, active, disabled, buttonIndex }) => {
  return (
    <button
      aria-current="page"
      className={`relative focus:outline-none inline-flex items-center px-4 py-2 border text-sm font-medium first:rounded-l-md last:rounded-r-md disabled:opacity-50  ${
        active
          ? 'z-10 bg-red-50 border-red-500 text-red-600 relative hover:bg-red-100 '
          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 '
      }`}
      disabled={disabled}
      onClick={() => onClick(buttonIndex)}
    >
      <span className="sr-only">{label}</span>
      {label === 'Prev' && <ChevronLeftIcon className="w-4 h-4" />}
      {label !== 'Prev' && label !== 'Next' && label}
      {label === 'Next' && <ChevronRightIcon className="w-4 h-4" />}
    </button>
  );
};

export default PaginationButton;
