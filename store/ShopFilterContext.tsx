import { fetchAllFilters } from '@utils/shop/helpers';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const ShopFilterContext = createContext({
  filters: {},
  updateFilter: (id, type) => {
    return;
  },
});

const ShopFilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [initFilters, setInitFilters] = useState({});
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const shopFilters = await fetchAllFilters(false);
      const categories = [...shopFilters?.categoryTree].map((item) => {
        return { ...item, type: 'category' };
      });
      const currentQueryParams = router?.query;

      const subCategories = [...shopFilters?.categoryTree]
        ?.reduce((acc, category) => {
          return [...acc, ...category?.subCategories];
        }, [])
        .map((item) => {
          const currentSubCatQuery = router?.query?.subcategory?.split('::');
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
          const currentVerticalQuery = router?.query?.vertical?.split('::');
          if (currentVerticalQuery?.indexOf(item?.name) > -1) {
            return { ...item, type: 'vertical', selected: true };
          }
          return { ...item, type: 'vertical', selected: false };
        });

      const retailers = shopFilters?.retailers?.list
        ?.filter((item) => item.preferred)
        .map((item) => {
          const currentRetailerQuery = router?.query?.retailer?.split('::');
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
    const updatedFilters = {
      ...filters,
      [type]: filters[type]?.map((item) => {
        if (item?._id === itemId) return { ...item, selected: !item?.selected };
        return { ...item };
      }),
    };

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
        pathname: router?.pathname,
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
