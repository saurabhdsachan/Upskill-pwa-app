import { CheckCircleIcon } from '@heroicons/react/solid';
import { Else, If, Then } from 'react-if';

const SelectionTick = ({ isSelected }) => {
  return (
    <If condition={isSelected}>
      <Then>
        <CheckCircleIcon className="h-6 w-6 inline" aria-hidden="true" />
      </Then>
      <Else>
        <svg height="22" width="22" viewBox="0 0 48 48" className="fill-slate-400 inline">
          <path d="M24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 23.95Q4 19.85 5.575 16.2Q7.15 12.55 9.875 9.85Q12.6 7.15 16.25 5.575Q19.9 4 24.05 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.15 38.125Q35.45 40.85 31.8 42.425Q28.15 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31.1 41 36.05 36.025Q41 31.05 41 24Q41 16.9 36.05 11.95Q31.1 7 24 7Q16.95 7 11.975 11.95Q7 16.9 7 24Q7 31.05 11.975 36.025Q16.95 41 24 41Z" />
        </svg>
      </Else>
    </If>
  );
};

export default SelectionTick;
