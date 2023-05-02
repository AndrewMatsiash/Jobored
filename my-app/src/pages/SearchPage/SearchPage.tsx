import React from 'react';
import { Flex, Pagination, Stack, createStyles } from '@mantine/core';
import FiltersForm from './ components/FiltersForm';
import JobCard from './ components/JobCard';
import SearchBar from './ components/SearchBar';
import { getVacancies } from '../../services/getVacancies';
import { IVacancy } from '../../types/vacancy';

const useStyles = createStyles(theme => ({
  filtersFormContainer: {
    flexBasis: '315px',
  },
  container: {
    flexGrow: 1,
  },
}));

export interface IDataSearch {
  page: number;
  text?: string;
  industry: string;
  paymentFrom: string;
  paymentTo: string;
}

export const SearchPage = () => {
  const { classes } = useStyles();
  const [vacancies, setVacancies] = React.useState<IVacancy[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataSearch, setDataSearch] = React.useState({
    page: 0,
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

  const handleSearchForm = (data: IDataSearch) => {
    setDataSearch({ textInput: dataSearch.textInput, ...data });
  };

  const { page, textInput, industry, paymentFrom, paymentTo } = dataSearch;

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getVacancies(
        page,
        textInput,
        industry,
        paymentFrom,
        paymentTo
      );
      if (data) {
        console.log(data);
        setVacancies(data);
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
          <div>...Loading...</div>
        ) : (
          vacancies.map(vacancy => (
            <JobCard key={vacancy.id} vacancy={vacancy} />
          ))
        )}
        <Pagination value={page} onChange={handlePagination} total={125} />
      </Stack>
    </Flex>
  );
};
