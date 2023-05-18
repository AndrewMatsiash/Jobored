import {
  Button,
  Center,
  Container,
  Flex,
  Image,
  Pagination,
  Stack,
  Text,
} from '@mantine/core';
import React from 'react';
import { IVacancy } from '../../types/vacancy';
import { getPaginateArray } from '../../utils/getPaginateArray';
import JobCard from '../SearchPage/ components/JobCard';
import { useNavigate } from 'react-router-dom';

export const FavoritesPage = () => {
  const navigation = useNavigate();
  const [favorites, setFavorites] = React.useState<IVacancy[]>([]);
  const [pageActive, setPageActive] = React.useState(1);
  const totalElements = 4;
  const totalPages = Math.ceil(favorites.length / totalElements);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favorites);
  }, []);

  const paginateArray = getPaginateArray<IVacancy>(favorites, pageActive, 4);

  const onChange = (data: IVacancy[]) => {
    setFavorites(data);
  };

  return favorites.length ? (
    <Container maw={773} w="100%">
      <Stack align="center" mx="auto" spacing="md">
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
    </Container>
  ) : (
    <Center style={{ flex: '1' }} miw={327} mx="auto">
      <Stack spacing={32} align="center">
        <Image src="./icons/notFoundFavoriteBg.svg" alt="notFoundFavorite" />
        <Text weight={700} align="center">
          Упс, здесь еще ничего нет!
        </Text>
        <Button variant="light" w={164} onClick={() => navigation('/')}>
          поиск вакансий
        </Button>
      </Stack>
    </Center>
  );
};
