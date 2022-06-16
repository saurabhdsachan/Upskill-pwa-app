import { classNames } from '@utils/helpers';
import React from 'react';

interface IButton {
  onClick?: () => void;
  bg?: string;
  className?: string;
  children: React.ReactNode;
  size?: 'big' | 'xl';
  type?: 'button' | 'submit';
  disabled?: boolean;
  raw?: boolean;
}

const Button: React.FC<IButton> = ({ onClick, raw, bg, size, className, type = 'button', disabled, children }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const bigClasses = 'py-3';

  const xlClasses = 'py-4';

  const baseClass =
    'inline-flex items-center justify-center disabled:bg-slate-100 disabled:text-slate-400 disabled:border-transparent';

  const shapeClasses =
    'w-full p-2 border rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 shadow-sm';

  const ghostClasses = 'border-slate-400 text-slate-900 focus:ring-slate-200';

  const colorClasses = `border-transparent text-white bg-gradient-to-r from-${bg}-600 to-${bg}-500 hover:bg-${bg}-700 focus:ring-${bg}-400 shadow-${bg}-500/50`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={
        raw
          ? classNames(baseClass, className)
          : classNames(
              baseClass,
              shapeClasses,
              bg ? colorClasses : ghostClasses,
              size === 'big' && bigClasses,
              size === 'xl' && xlClasses,
              className
            )
      }
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
