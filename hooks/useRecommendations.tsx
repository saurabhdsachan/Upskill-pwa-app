import fetcher from '@utils/fetcher';
import { useEffect, useReducer } from 'react';

const fetchProductRecommendations = async (assetId) => {
  const endPoint = '/v1/assetAlternatives/predict';
  const payload = {
    asset_id: assetId,
    min_price: 0,
    max_price: 100000,
    preferred_retailer: true,
    inStock: true,
  };
  try {
    const recommendationsResponse = await fetcher({ endPoint, method: 'POST', body: payload });
    const { data, statusCode } = recommendationsResponse;
    if (statusCode <= 301) {
      return data?.topSimilarAssets;
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
    case 'ADD_RECOMMENDATION_DATA': {
      const { payload: { productId = '', data = [] } = {} } = action;
      if (productId) {
        return {
          ...state,
          recommendationsData: {
            ...state.recommendationsData,
            [productId]: data,
          },
        };
      }

      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

const useRecommendations = (productId = '') => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { recommendationsData, loading, error } = state;

  useEffect(() => {
    console.log('in this value', productId);
    if (productId && (!state?.recommendationsData[productId] || state?.recommendationsData[productId]?.length === 0)) {
      dispatch({ type: 'SET_LOADING_ACTIVE' });
      fetchProductRecommendations(productId)
        .then((data) => {
          dispatch({ type: 'ADD_RECOMMENDATION_DATA', payload: { productId, data } });
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR' });
        })
        .finally(() => {
          dispatch({ type: 'SET_LOADING_INACTIVE' });
        });
    }
  }, [productId]);

  return {
    recommendations: recommendationsData[productId] || [],
    loading,
    error,
  };
};

export default useRecommendations;
