import { fetchAllFilters } from '@utils/shop/helpers';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const ShopFilterContext = createContext({
  filters: {
    retailer: [{ _id: '', name: '', selected: false }],
    subCategory: [{ _id: '', selected: false, verticals: [{ _id: '' }] }],
    category: [{ _id: '', selected: false, subCategories: [{ _id: '' }] }],
    vertical: [{ _id: '', name: '', selected: false, subcategory: 'string' }],
  },
  updateFilter: (id: string, type: string) => {
    return;
  },
});

interface RetailerType {
  _id: string;
  selected: boolean;
  name: string;
  preferred?: boolean;
}
interface SubcategoryType {
  _id: string;
  selected: boolean;
  verticals: Array<VerticalType>;
}
interface CategoryType {
  _id: string;
  selected: boolean;
  subCategories: Array<SubcategoryType>;
}
interface VerticalType {
  _id: string;
  selected: boolean;
  subcategory: string;
  name: string;
}
interface FilterType {
  retailer: Array<RetailerType>;
  subCategory: Array<SubcategoryType>;
  category: Array<CategoryType>;
  vertical: Array<VerticalType>;
}
interface AssetFilterType {
  retailers: {
    list: Array<RetailerType>;
    count?: number;
  };
  categoryTree: Array<CategoryType>;
}

const ShopFilterContextProvider = ({ children }) => {
  const [shopFilters, setShopFilters] = useState<AssetFilterType>();
  const [filters, setFilters] = useState<FilterType>({
    retailer: [{ _id: '', name: '', selected: false }],
    subCategory: [{ _id: '', verticals: [{ _id: '', name: '', selected: false, subcategory: '' }], selected: false }],
    vertical: [{ _id: '', name: '', selected: false, subcategory: '' }],
    category: [
      {
        _id: '',
        selected: false,
        subCategories: [
          { _id: '', selected: false, verticals: [{ _id: '', name: '', selected: false, subcategory: '' }] },
        ],
      },
    ],
  });

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const allFilters = await fetchAllFilters(false);
      setShopFilters(allFilters);
    })();
  }, []);

  useEffect(() => {
    const categories = [...(shopFilters?.categoryTree || [])].map((item) => {
      return { ...item, type: 'category' };
    });

    const subCategories = [...(shopFilters?.categoryTree || [])]
      ?.reduce((acc, category) => {
        return [...acc, ...category?.subCategories];
      }, [])
      .map((item) => {
        const currentSubCatQuery = ((router?.query?.subcategory || '') as string).split('::');
        if (currentSubCatQuery?.indexOf(item?.name) > -1) {
          return { ...item, type: 'subCategory', selected: true };
        }

        return { ...item, type: 'subCategory', selected: false };
      });
    const verticals = [...subCategories]
      ?.reduce((acc, subCategory) => {
        return [...acc, ...subCategory?.verticals];
      }, [])
      .map((item) => {
        const currentVerticalQuery = ((router?.query?.vertical || '') as string).split('::');

        if (currentVerticalQuery?.indexOf(item?.name) > -1) {
          return { ...item, type: 'vertical', selected: true };
        }

        return { ...item, type: 'vertical', selected: false };
      });

    const retailers = shopFilters?.retailers?.list
      ?.filter((item) => item.preferred)
      .map((item) => {
        const currentRetailerQuery = ((router?.query?.retailer || '') as string).split('::');
        if (currentRetailerQuery?.indexOf(item?.name) > -1) {
          return { ...item, type: 'retailer', selected: true };
        }

        return { ...item, type: 'retailer', selected: false };
      });

    setFilters({ category: categories, subCategory: subCategories, vertical: verticals, retailer: retailers });
  }, [router?.query?.subcategory, router?.query?.vertical, router?.query?.retailer, shopFilters]);

  const updateFilter = (itemId, type) => {
    const chosenFilterObject = filters[type]?.filter((item) => item?._id === itemId);
    const filtersOfType = ((router?.query[type] || '') as string).split('::');

    const currentFiltersOfSameType = filtersOfType?.length === 1 && !filtersOfType[0]?.length ? [] : filtersOfType;
    const index = currentFiltersOfSameType.indexOf(chosenFilterObject[0]?.name);
    if (index > -1) {
      currentFiltersOfSameType.splice(index, 1);
    } else {
      currentFiltersOfSameType.push(chosenFilterObject[0]?.name);
    }

    const queryType = type === 'subCategory' ? 'subcategory' : type;

    const updatedQueryParam = {
      [queryType]: currentFiltersOfSameType.join('::'),
    };
    const finalQuery = { ...router?.query, ...updatedQueryParam };
    const updated = Object.keys(finalQuery)?.reduce((acc, curr) => {
      if (finalQuery[curr]?.length) {
        acc[curr] = finalQuery[curr];
      }

      return acc;
    }, {});

    router.push(
      {
        query: { ...updated },
        pathname: '/shop',
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <ShopFilterContext.Provider
      value={{
        filters,
        updateFilter,
      }}
    >
      {children}
    </ShopFilterContext.Provider>
  );
};

export const useShopFilterContext = () => {
  return useContext(ShopFilterContext);
};

export default ShopFilterContextProvider;
