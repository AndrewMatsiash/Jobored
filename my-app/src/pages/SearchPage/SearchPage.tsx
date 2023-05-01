import React from 'react';
import { Flex, Stack, createStyles } from '@mantine/core';
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

export const SearchPage = () => {
  const { classes } = useStyles();
  const [vacancies, setVacancies] = React.useState<IVacancy[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = (data: IVacancy[]) => {
    setVacancies(data);
  };

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getVacancies('');
      if (data) {
        setVacancies(data);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Flex>
      <div className={classes.filtersFormContainer}>
        <FiltersForm />
      </div>
      <Stack spacing={'md'} className={classes.container}>
        <SearchBar onSearch={handleSearch} setIsLoading={setIsLoading} />
        {isLoading ? (
          <div>...Loading...</div>
        ) : (
          vacancies.map(vacancy => (
            <JobCard key={vacancy.id} vacancy={vacancy} />
          ))
        )}
      </Stack>
    </Flex>
  );
};
