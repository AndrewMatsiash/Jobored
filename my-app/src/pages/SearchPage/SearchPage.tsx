import React from 'react';
import { Flex, Group, Pagination, Stack, createStyles } from '@mantine/core';
import FiltersForm from './ components/FiltersForm';
import JobCard from './ components/JobCard';
import SearchBar from './ components/SearchBar';
import { getVacancies } from '../../services/getVacancies';
import { IVacancy } from '../../types/vacancy';
import { IDataFilterForm } from './ components/FiltersForm/FiltersForm';
import { calculateTotalPages } from '../../utils/calculateTotalPages';

const useStyles = createStyles(theme => ({
  filtersFormContainer: {
    flexBasis: '315px',
  },
  container: {
    flexGrow: 1,
  },
}));

export const SearchPage = () => {
  const { classes } = useStyles();
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
    <Flex>
      <div className={classes.filtersFormContainer}>
        <FiltersForm onSearch={handleSearchForm} />
      </div>
      <Stack spacing={'md'} className={classes.container}>
        <SearchBar onSearch={handleSearchInput} />
        {isLoading ? (
          <Stack justify="center" align="center" style={{ flexGrow: '1' }}>
            <div>...Loading...</div>
          </Stack>
        ) : (
          vacancies.map(vacancy => (
            <JobCard key={vacancy.id} vacancy={vacancy} />
          ))
        )}
        <Flex justify="center">
          <Pagination
            value={dataSearch.page}
            onChange={handlePagination}
            total={totalPages}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};
