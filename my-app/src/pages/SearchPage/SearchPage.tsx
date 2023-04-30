import {
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import FiltersForm from './ components/FiltersForm';
import JobCard from './ components/JobCard';
import SearchBar from './ components/SearchBar';

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
  return (
    <Flex>
      <div className={classes.filtersFormContainer}>
        <FiltersForm />
      </div>
      <div className={classes.container}>
        <SearchBar />
        <JobCard />
      </div>
    </Flex>
  );
};
