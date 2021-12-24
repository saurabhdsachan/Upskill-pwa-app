import React from 'react';
import PaginationButton from './PaginationButton';

interface ButtonObject {
  label: string;
  active: boolean;
  onClick: (prop: number) => void;
  disabled: boolean;
  index: number;
}

interface ButtonListProps {
  buttonList: Array<ButtonObject>;
}

const index: React.FC<ButtonListProps> = ({ buttonList }) => {
  return (
    <div className="text-center">
      <nav className="relative z-0 inline-flex shadow-md rounded-lg -space-x-px" aria-label="Pagination">
        {buttonList?.map((button) => {
          return (
            <PaginationButton
              key={button?.label}
              label={button?.label}
              onClick={button?.onClick}
              active={button?.active}
              disabled={button?.disabled}
              buttonIndex={button?.index}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default index;
