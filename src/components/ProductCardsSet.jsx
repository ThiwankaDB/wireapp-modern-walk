import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';

import ProductCard from '../components/ProductCard';

import { chunkArray } from '../utils/common';

/**
 * This component renders a set of product cards in a grid layout,
 * divided into rows based on the provided `chunkedSize`.
 *
 * @param {object[]} products - An array of product objects.
 * @param {number} chunkedSize - The number of products to display in each row.
 * @returns {JSX.Element} - The rendered product cards set.
 */
function ProductCardsSet({ products = [], chunkedSize = 4 }) {
  const [chunkedProducts, setChunkedProducts] = useState([]);

  useEffect(() => {
    setChunkedProducts(chunkArray(products, chunkedSize));
  }, [products, chunkedSize]);

  const productSet = useMemo(() => {
    return chunkedProducts.map((singleChunk, i) => (
      <div key={i} className="products-row pb-4">
        {singleChunk.map(item => (
          <ProductCard key={item.id} isMen={item.category === "men's clothing"} item={item} />
        ))}
      </div>
    ));
  }, [chunkedProducts]);

  return <div className="products-rows">{productSet}</div>;
}

ProductCardsSet.propTypes = {
  products: PropTypes.array,
  chunkedSize: PropTypes.number,
};

export default ProductCardsSet;
