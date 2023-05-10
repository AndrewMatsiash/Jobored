import { MAX_ELEMENTS_PER_PAGE, MAX_PAGES } from '../constants/superjobApi';

export const calculateTotalPages = (total: number) => {
  return total < MAX_ELEMENTS_PER_PAGE ? Math.ceil(total / 4) : MAX_PAGES;
};
