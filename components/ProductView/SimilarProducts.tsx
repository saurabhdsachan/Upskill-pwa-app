import ProductCard from '@components/Shop/ProductCard';
import useRecommendations from '@hooks/useRecommendations';
import React from 'react';

const SimilarProducts = ({ productId }) => {
  const { recommendations, loading } = useRecommendations(productId);
  const recommendationsData = React.useMemo(() => {
    return recommendations;
  }, [recommendations]);

  if (recommendationsData?.length === 0) return null;

  return (
    <div className="py-14">
      <h2 className="text-2xl tracking-wide">Similar Products</h2>
      <p className="mt-2 text-gray-700">Shop from a collection of similar products</p>
      <div className="mt-4 grid grid-cols-3 xl:grid-cols-6 gap-4">
        {recommendationsData?.slice(0, 6)?.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(SimilarProducts);
