import { internalPages } from '@utils/config';
import fetcher from '@utils/fetcher';

const defaultFilters = {
  category: [],
  retailer: [],
  price: [0, 5000],
  status: 'active',
  depth: [],
  height: [],
  width: [],
  vertical: [],
  subcategory: [],
  // discount: [0, 100],
  shoppable: true,
};

const fetchAllFilters = async (ctx) => {
  const endPoint = '/v2/unity/meta';
  try {
    const response = await fetcher({ ctx, endPoint, method: 'GET' });
    const { data, statusCode } = response;
    if (statusCode <= 301) {
      const { isFulfilled } = data;
      if (isFulfilled) {
        const { fulfillmentValue = {} } = data;
        return { ...fulfillmentValue };
      }
    } else {
      throw new Error();
    }
  } catch {
    return [];
  }
};

const fetchAssetList = async (
  {
    filters = {
      category: [],
      retailer: [],
      price: [],
      status: 'active',
      depth: [],
      vertical: [],
      height: [],
      width: [],
      subcategory: [],
    },
    searchText = '',
    skipVal = 0,
    wildcard = false,
  },
  ctx
) => {
  const endPoint = `/v1/assets/search?skip=${skipVal}&limit=${internalPages?.Shop?.DEFAULT_PAGE_SIZE}`;

  const {
    category = [],
    retailer = [],
    price = [],
    status = 'active',
    depth = [],
    height = [],
    width = [],
    vertical = [],
    subcategory = [],
  } = filters;

  const payload = {
    searchText,
    projectId: 'randomText',
    wildcard,
    sort: 'createdAt',
    status: 'active',
    filters: {
      category: [...category],
      retailer: [...retailer],
      price: [...price],
      status,
      depth: [...depth],
      height: [...height],
      width: [...width],
      vertical: [...vertical],
      subcategory: [...subcategory],
    },
  };

  try {
    const response = await fetcher({ ctx, endPoint, method: 'POST', body: { ...payload } });
    const { data, statusCode } = response;
    if (statusCode <= 301) {
      const { hits = [], total } = data;
      return { list: hits, total };
    }
    throw new Error();
  } catch {
    return [];
  }
};

export { fetchAllFilters, fetchAssetList, defaultFilters };
