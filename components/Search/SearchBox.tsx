import DesignCard from '@components/InteriorDesigns/DesignCard';
import EmptyState from '@components/Shared/EmptyState';
import { RefreshIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import useKeyPress from '@hooks/useKeyPress';
import useSearch from '@hooks/useSearch';
import TopSearches from '@utils/Mocks/TopSearches';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Tween } from 'react-gsap';
import styled, { keyframes } from 'styled-components';
import ListItem from './ListItem';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  &.entry {
    opacity: 0;
    transform: translateY(5px);
    animation: ${entry} 0.25s forwards;
  }
`;

const SearchBox: React.FC = () => {
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const escPress = useKeyPress('Escape');
  const [cursor, setCursor] = useState(-1);
  const [hovered, setHovered] = useState(undefined);

  const {
    autoCompleteResults,
    setSelectedSearchQuery,
    searchResultsList,
    searchString,
    setSearchString,
    init,
    isFetching,
  } = useSearch();

  const router = useRouter();

  const goBack = useCallback(() => router.back(), [router]);

  useEffect(() => {
    if (autoCompleteResults.length && downPress) {
      setCursor((prevState) => (prevState < autoCompleteResults.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress, autoCompleteResults.length]);

  useEffect(() => {
    if (autoCompleteResults.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, autoCompleteResults.length]);

  useEffect(() => {
    if (autoCompleteResults?.length && enterPress) {
      // setSelected(autoCompleteResults[cursor]);
      const indexVal = cursor === -1 ? autoCompleteResults?.length - 1 : cursor;
      setSelectedSearchQuery(autoCompleteResults[indexVal]);
      setSearchString(autoCompleteResults[indexVal]?.value);
    }
  }, [cursor, enterPress, autoCompleteResults?.length, autoCompleteResults, setSelectedSearchQuery, setSearchString]);

  useEffect(() => {
    if (autoCompleteResults.length && hovered) {
      setCursor(autoCompleteResults.indexOf(hovered));
    }
  }, [autoCompleteResults, hovered]);

  useEffect(() => {
    if (escPress) goBack();
  }, [escPress, goBack]);

  const clear = () => setSearchString('');

  return (
    <div className="relative min-h-free bg-gray-100">
      <div className="relative md:max-w-3xl xl:max-w-3xl mx-auto pt-12 pb-10 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <AnimateBox className="entry">
          <div className="relative">
            <div className="absolute left-6 inset-y-0 flex justify-center items-center">
              <SearchIcon className="w-4 h-4 text-gray-900" />
            </div>
            <input
              autoFocus
              onChange={(e) => setSearchString(e?.target?.value)}
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="off"
              placeholder="Start typing to view inspiring designs"
              value={searchString}
              className="py-5 pl-14 pr-28 outline-none block w-full caret-yellow-500 shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl capitalize"
            />
            <div className="absolute right-20 inset-y-0 flex justify-center items-center">
              {isFetching && <RefreshIcon className="w-4 h-4 text-gray-500 animate-spin" />}
            </div>
            <button
              className="absolute right-0 inset-y-0 text-gray-500 hover:text-yellow-500 w-16 bg-gray-50 flex justify-center text-center items-center border border-gray-100 rounded-xl focus:ring-1 focus:ring-gray-600 focus:outline-none"
              onClick={clear}
            >
              <span className="text-xs">clear</span>
            </button>
          </div>
        </AnimateBox>
        <div className="relative">
          <div className="inset-0 absolute z-10">
            {!!autoCompleteResults?.length && (
              <AnimateBox className={`${searchString && 'entry'}`}>
                <ul className="w-full bg-white border border-gray-100 mt-2 p-4 shadow-sm rounded-xl overflow-hidden">
                  {autoCompleteResults.map((item, i) => (
                    <ListItem
                      key={item.id}
                      active={i === cursor}
                      item={item}
                      setSelected={setSelectedSearchQuery}
                      setHovered={setHovered}
                      setSearchString={setSearchString}
                    />
                  ))}
                </ul>
              </AnimateBox>
            )}
          </div>
        </div>
      </div>
      {searchResultsList && searchResultsList?.length === 0 ? (
        <>
          {init === 'init' ? (
            <div className="max-w-md text-center mx-auto px-4">
              <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} duration={1} ease="back.out(1.7)">
                <p className="text-gray-500">Most popular searches</p>
              </Tween>
              <div className="grid grid-cols-4 gap-x-4 mt-4">
                <Tween
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  duration={2}
                  ease="back.out(1.7)"
                  stagger={0.25}
                  delay={0.25}
                >
                  {TopSearches?.map((searchItem) => {
                    return (
                      <div key={searchItem?.id} onClick={() => setSelectedSearchQuery(searchItem?.meta)}>
                        <div className="overflow-hidden shadow-md hover:shadow-xl  rounded-xl cursor-pointer border border-gray-300 transition hover:-translate-y-1">
                          <Image
                            src={searchItem?.img}
                            className="object-cover"
                            alt="spacejoy happy customer"
                            height="124"
                            width="124"
                            layout="responsive"
                          />
                        </div>
                        <small className="capitalize mt-6 text-gray-500">{searchItem?.title}</small>
                      </div>
                    );
                  })}
                </Tween>
              </div>
            </div>
          ) : (
            <EmptyState
              title="No results"
              message="Oops! No results match your search criteria. Please try again with different keywords."
            />
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 pb-40">
          <p className="text-gray-400 text-xl mb-5 capitalize">Search Results</p>
          <div className="lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-8 grid">
            {searchResultsList?.map((searchItem) => (
              <DesignCard cardData={searchItem?.design} key={searchItem?.design?._id} />
            ))}
          </div>
        </div>
      )}
      <button
        className="absolute right-0 inset-y-0 w-16 h-16 text-center text-gray-400 hover:text-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
        onClick={goBack}
      >
        <XIcon className="inline w-6 h-6" />
        <p className="text-xs mt-1">esc</p>
      </button>
    </div>
  );
};

export default SearchBox;
