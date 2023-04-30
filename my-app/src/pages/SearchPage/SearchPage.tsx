import { Flex, Stack, createStyles } from '@mantine/core';
import FiltersForm from './ components/FiltersForm';
import JobCard from './ components/JobCard';
import SearchBar from './ components/SearchBar';
import { getVacancies } from '../../services/getVacancies';
import React from 'react';
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

  React.useEffect(() => {
    const getData = async () => {
      const data = await getVacancies();
      if (data) {
        setVacancies(data);
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
        <SearchBar />
        {vacancies.map(vacancy => {
          return <JobCard vacancy={vacancy} />;
        })}
      </Stack>
    </Flex>
  );
};
