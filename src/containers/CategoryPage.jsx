import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import ProductCardsSet from '../components/ProductCardsSet';
import Loading from '../components/Loading';

import { fetchProductsRelatedToCategory } from '../apis/common';
import { scrollToTop } from '../utils/common';
import commonHelper from '../helpers/common';
import { CARDS_COUNT_TOBE_SHOWN, CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE } from '../config/config';

/**
 * Functional component representing a category page
 * Displays products related to the specified category ("men's clothing" or "women's clothing")
 * @param {boolean} isMen - Optional prop to indicate if it's a men's clothing category (defaults to false for women's)
 */
function CategoryPage({ isMen = false }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handler function to fetches products related to the category
   */
  const fetchProductsRelatedToCategoryHandler = async () => {
    setIsLoading(true);
    const data = await fetchProductsRelatedToCategory(
      isMen ? commonHelper.HOMEPAGE.CATETORY_SECTION.MEN.KEY : commonHelper.HOMEPAGE.CATETORY_SECTION.WOMEN.KEY,
      CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE,
    );
    setProducts(data);
    setIsLoading(false);
  };

  // When component mount and category change, scrolls to top
  useEffect(() => {
    scrollToTop();
    fetchProductsRelatedToCategoryHandler();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <h3 className="mt-5 mb-5">
            {isMen
              ? commonHelper.HOMEPAGE.CATETORY_SECTION.MEN.LINK_TEXT
              : commonHelper.HOMEPAGE.CATETORY_SECTION.WOMEN.LINK_TEXT}
          </h3>
        </Row>
        {isLoading ? (
          <div className="vh-50 d-flex align-items-center">
            <Loading />
          </div>
        ) : (
          <ProductCardsSet products={products} chunkedSize={CARDS_COUNT_TOBE_SHOWN} />
        )}
      </Container>
    </section>
  );
}

CategoryPage.propTypes = {
  isMen: PropTypes.bool,
};

export default CategoryPage;
