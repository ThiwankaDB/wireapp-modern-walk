import { BACKEND_API_URL } from '../config/config';

export default Object.freeze({
  GET_FLASH_SALE_PRODUCTS: `${BACKEND_API_URL}/products`,
  GET_PRODUCTS_RELATED_TO_CATEGORY: `${BACKEND_API_URL}/products/category`,
});
