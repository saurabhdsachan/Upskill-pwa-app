import { useShopFilterContext } from '@store/ShopFilterContext';
import Link from 'next/link';
import React, { useMemo } from 'react';

const ShopCategories = () => {
  const {
    filters: { categories = [] },
  } = useShopFilterContext();

  const splitCategories = useMemo(() => {
    let [...arr] = categories;
    var res = [];
    while (arr.length) {
      res.push(arr.splice(0, 2));
    }
    return res;
  }, [categories]);

  return (
    <div className="grid grid-cols-7 gap-8">
      {splitCategories?.map((categorySet, index) => {
        return (
          <div key={index}>
            {categorySet.map((category) => {
              return (
                <div key={category?._id} className="pt-8">
                  <h3>{category?.name}</h3>
                  <ul key={category?._id}>
                    {category?.subCategories?.map((subCategory) => {
                      return (
                        <Link
                          href={{
                            pathname: '/shop',
                            query: {
                              subcategory: subCategory?.name,
                            },
                          }}
                          key={subCategory?._id}
                          passHref
                        >
                          <li className="text-sm pt-1 cursor-pointer hover:underline capitalize">
                            {subCategory?.name}
                          </li>
                        </Link>
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
