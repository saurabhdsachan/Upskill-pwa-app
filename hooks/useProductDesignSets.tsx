import { publicRoutes } from '@utils/constants';
import fetcher from '@utils/fetcher';
import { useEffect, useReducer, useState } from 'react';

const fetchDesignSets = async (productIds) => {
  const endPoint = `${publicRoutes?.collageBase}/search`;
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
  designSetData: {},
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
    case 'SAVE_DESIGN_SET': {
      const { payload: { designSets = [], products = [] } = {} } = action;

      const designSetsMapping = products?.reduce((acc, curr) => {
        const sets = designSets?.filter((designSet) => designSet?.products.indexOf(curr) > -1);

        acc[curr] = sets;
        return acc;
      }, {});

      return {
        ...state,
        designSetData: {
          ...state.designSetData,
          ...designSetsMapping,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};

const useProductDesignSets = (productIds = []) => {
  const [products] = useState(productIds);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { designSetData, loading, error } = state;

  useEffect(() => {
    if (products?.length) {
      dispatch({ type: 'SET_LOADING_ACTIVE' });
      fetchDesignSets(products)
        .then((data) => {
          const { data: designData } = data;
          dispatch({ type: 'SAVE_DESIGN_SET', payload: { designSets: [...designData], products: [...products] } });
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR' });
        })
        .finally(() => {
          dispatch({ type: 'SET_LOADING_INACTIVE' });
        });
    }
  }, [products]);

  return {
    // recommendations: recommendationsData[productId] || [],
    designSetData,
    loading,
    error,
  };
};

export default useProductDesignSets;
