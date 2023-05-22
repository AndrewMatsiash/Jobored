import React from 'react';
import {
  Center,
  Container,
  Flex,
  Loader,
  Pagination,
  Stack,
  Text,
} from '@mantine/core';
import FiltersForm from './ components/FiltersForm';
import SearchBar from './ components/SearchBar';
import { getVacancies } from '../../services/getVacancies';
import { IVacancy } from '../../types/vacancy';
import { IDataFilterForm } from './ components/FiltersForm/FiltersForm';
import { calculateTotalPages } from '../../utils/calculateTotalPages';
import { useMediaQuery } from '@mantine/hooks';
import VacanciesList from './ components/VacanciesList';

export const SearchPage = () => {
  const largeScreen = useMediaQuery('(min-width: 30em)');
  const [vacancies, setVacancies] = React.useState<IVacancy[]>([]);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataSearch, setDataSearch] = React.useState({
    page: 1,
    textInput: '',
    industry: '',
    paymentFrom: '',
    paymentTo: '',
  });

  const handlePagination = (page: number) => {
    setDataSearch({ ...dataSearch, page: page });
  };

  const handleSearchInput = (text: string) => {
    setDataSearch({ ...dataSearch, textInput: text });
  };

  const handleSearchForm = (data: IDataFilterForm) => {
    setDataSearch({ ...dataSearch, textInput: dataSearch.textInput, ...data });
  };

  React.useEffect(() => {
    const { page, textInput, industry, paymentFrom, paymentTo } = dataSearch;

    const getData = async () => {
      setIsLoading(true);
      const data = await getVacancies(
        page - 1,
        textInput,
        industry,
        paymentFrom,
        paymentTo
      );
      if (data) {
        const totalPages = calculateTotalPages(data.total);
        setTotalPages(totalPages);
        setVacancies(data.objects);
        setIsLoading(false);
      }
    };
    getData();
  }, [dataSearch]);

  return (
    <Container pt={40} maw="1136px" w="100%" mx="auto" px={10} mb={10}>
      <Flex direction={largeScreen ? 'row' : 'column'} gap={28}>
        <FiltersForm onSearch={handleSearchForm} />
        <Stack align="center" spacing="md" style={{ flexGrow: 1 }}>
          <SearchBar onSearch={handleSearchInput} />
          {isLoading ? (
            <Center>
              <Loader />
            </Center>
          ) : vacancies.length === 0 ? (
            <Text>По вашему запросу результатов не найдено</Text>
          ) : (
            <>
              <VacanciesList vacancies={vacancies} />
              <Pagination
                value={dataSearch.page}
                onChange={handlePagination}
                total={totalPages}
              />
            </>
          )}
        </Stack>
      </Flex>
    </Container>
  );
};
