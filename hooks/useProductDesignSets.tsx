import { publicRoutes } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { useEffect, useReducer } from 'react';

const fetchDesignSets = async (productIds) => {
  const endPoint = publicRoutes?.collageBase;
  const payload = {
    filters: {
      isActive: true,
      price: ['1', '500000'],
      products: [...productIds],
    },
    searchText: '',
    wildcard: true,
  };
  try {
    const designSetRes = await fetcher({ endPoint, method: 'POST', body: payload });
    const { data, statusCode } = designSetRes;
    if (statusCode <= 301) {
      return data;
    }
    throw new Error();
  } catch {
    return [];
  }
};

const initialState = {
  loading: false,
  recommendationsData: {},
  error: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING_ACTIVE': {
      return { ...state, loading: true };
    }
    case 'SET_LOADING_INACTIVE': {
      return { ...state, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};

const useRecommendations = (productIds = []) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { recommendationsData, loading, error } = state;

  useEffect(() => {
    // if (productId && (!state?.recommendationsData[productId] || state?.recommendationsData[productId]?.length === 0)) {
    //   dispatch({ type: 'SET_LOADING_ACTIVE' });
    //   fetchProductRecommendations(productId)
    //     .then((data) => {
    //       dispatch({ type: 'ADD_RECOMMENDATION_DATA', payload: { productId, data } });
    //     })
    //     .catch(() => {
    //       dispatch({ type: 'SET_ERROR' });
    //     })
    //     .finally(() => {
    //       dispatch({ type: 'SET_LOADING_INACTIVE' });
    //     });
    // }
    (async () => {
      if (productIds?.length) {
        const designSetRes = await fetchDesignSets(productIds);
      }
    })();
  }, [productIds]);

  return {
    // recommendations: recommendationsData[productId] || [],
    loading,
    error,
  };
};

export default useRecommendations;
