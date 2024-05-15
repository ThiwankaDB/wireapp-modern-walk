import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import ProductCardsSet from '../components/ProductCardsSet';
import CategoryCard from '../components/CategoryCard';
import Loading from '../components/Loading';

import { fetchProductsForFlashSale } from '../apis/common';
import commonHelper from '../helpers/common';
import { CARDS_COUNT_TOBE_SHOWN, CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE } from '../config/config';

/**
 * Homepage component displays a flash sale section and category links.
 *
 * @returns {JSX.Element} JSX representing the homepage content.
 */
export default function Homepage() {
  // State variables for products and loading state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handler function for fetches flash sale products and updates the state.
   */
  const fetchProductsForFlashSaleHandler = async () => {
    setIsLoading(true);
    const data = await fetchProductsForFlashSale(CARDS_COUNT_TOBE_SHOWN);
    setProducts(data);
    setIsLoading(false);
  };

  /**
   * Fetches flash sale products on component mount.
   */
  useEffect(() => {
    fetchProductsForFlashSaleHandler();
  }, []);

  return (
    <>
      {/* Flash Sale */}
      <section>
        <Container>
          <Row>
            <h3 className="mt-5 mb-5">{commonHelper.HOMEPAGE.FLASH_SALE_SECTION.HEADER}</h3>
          </Row>
          {isLoading ? (
            <div className="vh-30 d-flex align-items-center">
              <Loading />
            </div>
          ) : (
            <ProductCardsSet products={products} chunkedSize={CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE} />
          )}
        </Container>
      </section>

      {/* Categories */}
      <section className="pb-5">
        <Container>
          <Row>
            <h3 className="mt-5 mb-5">{commonHelper.HOMEPAGE.CATETORY_SECTION.HEADER}</h3>
          </Row>
          <Row>
            <div className="d-flex gap-5 text-center">
              <CategoryCard isMen />
              <CategoryCard />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
