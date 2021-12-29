import { useShopFilterContext } from '@store/ShopFilterContext';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

const ShopCategories = () => {
  const {
    filters: { category = [] },
    updateFilter,
  } = useShopFilterContext();

  const splitCategories = useMemo(() => {
    let [...arr] = category;
    var res = [];
    while (arr.length) {
      res.push(arr.splice(0, 2));
    }

    return res;
  }, [category]);

  const router = useRouter();

  return (
    <div className="grid grid-cols-7 gap-4">
      {splitCategories?.map((categorySet, index) => {
        return (
          <div key={index}>
            {categorySet.map((item) => {
              return (
                <div key={item?._id} className="bg-gray-50 p-4 mt-4">
                  <h3 className="font-semibold text-sm pl-1">{item?.name}</h3>
                  <ul key={item?._id}>
                    {item?.subCategories?.map((subCategory) => {
                      return (
                        <a
                          className="block rounded pl-1 py-0.5 focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 focus:outline-none"
                          key={subCategory?._id}
                        >
                          <li
                            className="text-sm text-gray-700 cursor-pointer hover:underline capitalize"
                            onClick={() => updateFilter(subCategory?._id, 'subCategory')}
                          >
                            {subCategory?.name}
                          </li>
                        </a>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ShopCategories);
