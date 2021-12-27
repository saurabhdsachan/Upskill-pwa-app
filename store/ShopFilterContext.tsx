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

const ShopFilterContextProvider = ({ children }) => {
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
      const shopFilters = await fetchAllFilters(false);
      const categories = [...shopFilters?.categoryTree].map((item) => {
        return { ...item, type: 'category' };
      });

      const subCategories = [...shopFilters?.categoryTree]
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
    })();
  }, []);

  const updateFilter = (itemId, type) => {
    // update filters for UI changes and update query params

    let updatedFilters = {
      ...filters,
      [type]: filters[type]?.map((item) => {
        if (item?._id === itemId) {
          return { ...item, selected: !item?.selected };
        } else {
          if (type === 'retailer' || type === 'vertical') {
            return { ...item };
          }
          return { ...item, selected: false };
        }
      }),
    };
    if (type === 'subCategory') {
      updatedFilters = {
        ...updatedFilters,
        vertical: [...updatedFilters?.vertical]?.map((item) => {
          return { ...item, selected: false };
        }),
      };
    }

    setFilters(updatedFilters);

    const newQueryParams = Object.keys(updatedFilters)?.reduce((acc, currValue) => {
      const selectedFilters = updatedFilters[currValue]?.filter((item) => item?.selected);
      if (selectedFilters?.length > 0) {
        acc[currValue.toLowerCase()] = selectedFilters
          ?.map((current) => {
            return current?.name;
          })
          .join('::');
      }
      return acc;
    }, {});

    router.push(
      {
        query: { ...newQueryParams },
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
