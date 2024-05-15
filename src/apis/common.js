import APIs from '../helpers/apiRoutes';
import { get } from '../libs/api/apiConnector';

export const fetchProductsForFlashSale = async limit => {
  try {
    const response = await get(`${APIs.GET_FLASH_SALE_PRODUCTS}?limit=${limit}`);
    return response.data;
  } catch (e) {
    console.error('Fetching products for flash sale error', e);
    return [];
  }
};

export const fetchProductsRelatedToCategory = async (category, limit) => {
  try {
    const response = await get(`${APIs.GET_PRODUCTS_RELATED_TO_CATEGORY}/${category}?limit=${limit}`);
    return response.data;
  } catch (e) {
    console.error('Fetching products related to the category error', e);
    return [];
  }
};
