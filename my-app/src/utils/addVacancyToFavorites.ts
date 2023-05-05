import { IVacancy } from '../types/vacancy';

export const addVacancyToFavorites = (vacancy: IVacancy) => {
  const data = localStorage.getItem('favorites');
  if (!data) {
    localStorage.setItem('favorites', JSON.stringify([vacancy]));
  } else {
    const favorites = JSON.parse(data);
    localStorage.setItem('favorites', JSON.stringify([...favorites, vacancy]));
  }
};
