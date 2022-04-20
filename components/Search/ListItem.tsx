import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

interface ListItemInterface {
  item: {
    id: number;
    title: string;
    theme: string;
    thumbnail: string;
    type: string;
    value: string;
  };
  active: boolean;
  setSelected: ({ id, title, theme, thumbnail }) => void;
  setHovered: ({ id, title, theme, thumbnail }) => void;
  setSearchString: (args: string) => void;
}

const ListItem: React.FC<ListItemInterface> = ({ item, active, setSelected, setHovered, setSearchString }) => (
  <li
    className={`flex items-center space-x-2 lg:space-x-4 transition:background rounded-md cursor-pointer duration-200 mt-4 first:mt-0 ${
      active ? 'bg-gray-200' : 'bg-white'
    }`}
    onClick={() => {
      setSelected(item);
      setSearchString(item?.value);
    }}
    onMouseEnter={() => {
      setHovered(item);
    }}
    onMouseLeave={() => {
      setHovered(undefined);
    }}
  >
    {item?.type === 'keyword' ? (
      <Image
        src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,w_100/v1621942704/server/designs/render/60ace1ad7c68df00239a02e0.webp"
        className="rounded-md"
        alt="placeholder"
        height="56"
        width="56"
        layout="intrinsic"
      />
    ) : (
      <div className="rounded-md h-14 w-14 bg-red-200 flex items-center justify-center">
        <SearchIcon className="h-6 w-6" />
      </div>
    )}
    <div>
      <h4 className="leading-6 overflow-ellipsis overflow-hidden capitalize">{item.title}</h4>
      <p className="text-gray-500 text-xs">{item.theme}</p>
    </div>
  </li>
);

export default ListItem;
