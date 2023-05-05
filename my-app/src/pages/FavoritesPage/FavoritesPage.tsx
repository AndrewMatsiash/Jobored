import React from 'react';
import JobCard from '../SearchPage/ components/JobCard';
import { Stack, Flex, Pagination } from '@mantine/core';
import { IVacancy } from '../../types/vacancy';
import { getPaginateArray } from '../../utils/getPaginateArray';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(true);
  const toggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };

  const [pageActive, setPageActive] = React.useState(1);
  const totalElements = 4;
  const totalPages = Math.ceil(favorites.length / totalElements);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favorites);
  }, [isFavorite]);

  const paginateArray = getPaginateArray<IVacancy>(favorites, pageActive, 4);

  return (
    <div>
      <Stack spacing={'md'}>
        {paginateArray.map((vacancy: IVacancy) => (
          <JobCard
            key={vacancy.id}
            vacancy={vacancy}
          />
        ))}
        <Flex justify="center">
          <Pagination
            value={pageActive}
            onChange={setPageActive}
            total={totalPages}
          />
        </Flex>
      </Stack>
    </div>
  );
};
