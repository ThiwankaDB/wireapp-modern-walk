import PropTypes from 'prop-types';

import commonHelper from '../helpers/common';
import { CARD_SIZE_IN_PX } from '../config/config';

/**
 * Functional component to display a product card with title, image, price, and description.
 *
 * @param {boolean} isMen (optional) - Boolean flag indicating if the product is for men.
 *                                      Defaults to false (women).
 * @param {object} item (required) - Product data object with the following properties:
 *                                      - title (string): Required. Product title.
 *                                      - price (number): Required. Product price.
 *                                      - description (string): Required. Product description.
 *                                      - image (string): Required. Product image URL.
 * @returns {JSX.Element} The product card component.
 */
function ProductCard({ isMen = false, item }) {
  return (
    <div className={`card ${isMen ? 'men' : 'women'}`} style={{ flexBasis: `${CARD_SIZE_IN_PX}px` }}>
      <h6>{item.title}</h6>
      <img src={item.image} alt={item.title} />
      <div className="info">
        <h5>
          {commonHelper.PRODUCT_CARD.PRICE.CURRENCY}{' '}
          {item.price?.toFixed(commonHelper.PRODUCT_CARD.PRICE.DECIMAL_POINTS)}
        </h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  isMen: PropTypes.bool,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
