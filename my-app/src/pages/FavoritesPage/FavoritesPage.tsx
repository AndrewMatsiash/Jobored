import React from 'react';
import JobCard from '../SearchPage/ components/JobCard';
import { Stack, Flex, Pagination } from '@mantine/core';
import { IVacancy } from '../../types/vacancy';
import { getPaginateArray } from '../../utils/getPaginateArray';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState<IVacancy[]>([]);
  const [pageActive, setPageActive] = React.useState(1);
  const totalElements = 4;
  const totalPages = Math.ceil(favorites.length / totalElements);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favorites);
  }, [favorites]);

  const paginateArray = getPaginateArray<IVacancy>(favorites, pageActive, 4);

  const onChange = (data: IVacancy[]) => {
    setFavorites(data);
  };

  return (
    <div>
      <Stack maw={773} m={'0 auto'} spacing={'md'}>
        {paginateArray.map((vacancy: IVacancy) => (
          <JobCard key={vacancy.id} vacancy={vacancy} onChange={onChange} />
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
