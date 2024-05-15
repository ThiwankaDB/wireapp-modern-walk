export const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || 'https://fakestoreapi.com';

export const CARD_SIZE_IN_PX = import.meta.env.VITE_CARD_SIZE_IN_PX || 300;

export const CARDS_COUNT_TOBE_SHOWN =
  (import.meta.env.VITE_CARDS_COUNT_TOBE_SHOWN && Number(import.meta.env.VITE_CARDS_COUNT_TOBE_SHOWN)) || 4;
export const CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE =
  (import.meta.env.VITE_CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE &&
    Number(import.meta.env.VITE_CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE)) ||
  20;
