import { fetchAllFilters } from '@utils/shop/helpers';
import { createContext, useContext, useEffect, useState } from 'react';

const ShopFilterContext = createContext({
  filters: {},
  updateFilter: (id, type) => {
    return;
  },
});

const ShopFilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    (async () => {
      const shopFilters = await fetchAllFilters(false);
      const categories = [...shopFilters?.categoryTree].map((item) => {
        return { ...item, selected: false, type: 'category' };
      });
      const subCategories = [...shopFilters?.categoryTree]
        ?.reduce((acc, category) => {
          return [...acc, ...category?.subCategories];
        }, [])
        .map((item) => {
          return { ...item, selected: false, type: 'subCategory' };
        });
      const verticals = [...subCategories]
        ?.reduce((acc, subCategory) => {
          return [...acc, ...subCategory?.verticals];
        }, [])
        .map((item) => {
          return { ...item, selected: false, type: 'vertical' };
        });

      const retailers = shopFilters?.retailers?.list?.map((item) => {
        return { ...item, selected: false, type: 'retailer' };
      });

      setFilters({ categories, subCategories, verticals, retailers });
    })();
  }, []);
  const updateFilter = (itemId, type) => {
    // update query params
    const updatedFilters = {
      ...filters,
      [type]: filters[type]?.map((item) => {
        if (item?._id === itemId) return { ...item, selected: !item?.selected };
        return { ...item };
      }),
    };
    setFilters(updatedFilters);
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
