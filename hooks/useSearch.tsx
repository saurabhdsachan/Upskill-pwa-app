import { publicRoutes } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { debounce } from '@utils/helpers';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const getSearchRecommendations = async (searchQuery, cb) => {
  try {
    const endPoint = `${publicRoutes.searchAutoCompleteRoute}?query=${searchQuery}`;
    const autCompleteResponse = await fetcher({ endPoint, method: 'GET' });
    const { data, statusCode } = autCompleteResponse;
    if (statusCode <= 301) {
      cb(data);

      return data;
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error();
  }
};

const getSearchResults = async (keywords) => {
  try {
    const endPoint = `${publicRoutes.searchResultsRoute}?skip=0`;
    const searchResults = await fetcher({ endPoint, method: 'POST', body: { keywords } });
    const { data, statusCode } = searchResults;

    if (statusCode < 301) {
      return data;
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error();
  }
};

const searchResFetcher = debounce(getSearchRecommendations, 300);

const useSearch = (): any => {
  // search string
  const [searchString, setSearchString] = useState('');
  // autcomplete
  const [searchAutoCompleteResult, setSearchAutoCompleteResult] = useState([]);
  const [, setAutoCompleteError] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const [autoCompleteRaw, setAutoCompleteRaw] = useState([]);
  // search results
  const [searchResultsList, setSearchResultsList] = useState([]);
  const [, setSearchError] = useState(null);
  const [isLoadingSearch, setSearchLoading] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const router = useRouter();
  const initRef = useRef('init');

  const setSelectedSearchQuery = (queryItem) => {
    const { type = '', value = '' } = queryItem;
    // prepare keyword for query params
    let queryTitle;
    if (type === 'keyword') {
      queryTitle = queryItem?.title;
    } else {
      queryTitle = autoCompleteRaw.map((item) => item).join(',');
    }
    const currentQueryParam = router.query;
    router.replace(
      {
        pathname: router.pathname,
        query: { ...currentQueryParam, q: encodeURIComponent(queryTitle || value), search: value },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (isSelected) {
      setSelected(false);
    }
  }, [isSelected, searchString]);

  useEffect(() => {
    const fetchSearchResults = async (keywords) => {
      try {
        setSearchLoading(true);
        const searchResultsData = await getSearchResults(keywords);
        const { hits: searchResultsList = [] } = searchResultsData;
        initRef.current = null;
        setSearchResultsList(searchResultsList);
      } catch (e) {
        setSearchError(e.message);
        setSearchResultsList([]);
      } finally {
        setSelected(true);
        setSearchLoading(false);
      }
    };

    const {
      query: { q = '', search = '' },
    } = router;
    if (q && q?.length) {
      const queryParam = decodeURIComponent(q as string);
      const queryKeywords = queryParam.split(',');
      fetchSearchResults(queryKeywords);
    }
    if (search && search?.length) {
      setSearchString(search as string);
    }
  }, [router]);

  useEffect(() => {
    if (isSelected) {
      setSearchAutoCompleteResult([]);
    }
  }, [isSelected]);
  useEffect(() => {
    let cancelled = false;

    const fetchSearchAutoComplete = async (searchString) => {
      try {
        await searchResFetcher(searchString, (searchData) => {
          if (!cancelled) {
            setAutoCompleteRaw(searchData);
            const formattedRes = searchData.map((item, index) => {
              return {
                title: item,
                theme: item,
                id: index + 1,
                selected: false,
                type: 'keyword',
                value: item,
              };
            });
            formattedRes.push({
              title: `See all results for '${searchString}'`,
              theme: '',
              selected: false,
              type: 'all',
              id: 0,
              value: searchString,
            });
            setSearchAutoCompleteResult(formattedRes);
          }
        });
      } catch (e) {
        setAutoCompleteError(e.message);
        setSearchAutoCompleteResult([]);
      } finally {
        setTimeout(() => {
          setFetching(false);
        }, 600);
      }
    };
    // fetch search results
    if (searchString && searchString.length >= 2 && !isSelected) {
      setFetching(true);
      setSearchAutoCompleteResult([]);
      fetchSearchAutoComplete(searchString);
    } else {
      setSearchAutoCompleteResult([]);
    }

    return () => {
      cancelled = true;
    };
  }, [searchString, isSelected]);

  return {
    autoCompleteResults: searchAutoCompleteResult,
    recommendationList: [],
    isFetching,
    setSelectedSearchQuery,
    isLoadingSearch,
    searchResultsList,
    searchString,
    setSearchString,
    init: initRef.current,
  };
};

export default useSearch;
