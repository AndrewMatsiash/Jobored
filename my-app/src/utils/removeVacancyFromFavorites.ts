import { IVacancy } from '../types/vacancy';

export const removeVacancyFromFavorites = (vacancyId: number) => {
  const data = localStorage.getItem('favorites');
  if (data) {
    const favorites: IVacancy[] = JSON.parse(data).filter(
      (f: IVacancy) => f.id !== vacancyId
    );
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
  }
};
