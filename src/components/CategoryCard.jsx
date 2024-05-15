import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import commonHelper from '../helpers/common';
import routesHelper from '../helpers/routes';

/**
 * This component renders a category card for the homepage.
 * It displays a heading with a link to the corresponding category page.
 *
 * @param {boolean} isMen - Optional prop to determine if the card represents the men's category (defaults to false).
 * @returns {JSX.Element} - The rendered category card component.
 */
export default function CategoryCard({ isMen = false }) {
  return (
    <div className={`category-card ${isMen ? 'men' : 'women'}`}>
      <h1>
        <Link to={isMen ? routesHelper.CATEGORY_PAGE.MEN : routesHelper.CATEGORY_PAGE.WOMEN}>
          {isMen
            ? commonHelper.HOMEPAGE.CATETORY_SECTION.MEN.LINK_TEXT
            : commonHelper.HOMEPAGE.CATETORY_SECTION.WOMEN.LINK_TEXT}
        </Link>
      </h1>
    </div>
  );
}

CategoryCard.propTypes = {
  isMen: PropTypes.bool,
};
