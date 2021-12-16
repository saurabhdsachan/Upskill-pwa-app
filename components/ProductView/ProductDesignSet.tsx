import useProductDesignSets from '@hooks/useProductDesignSets';
import React from 'react';

const ProductDesignSet = ({ productIds }) => {
  const { loading, error } = useProductDesignSets([...productIds]);
  return <div>design sets go here</div>;
};

export default ProductDesignSet;
