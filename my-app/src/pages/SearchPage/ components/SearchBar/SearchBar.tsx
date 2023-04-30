import React from 'react';
import './SearchBar.css';
import { Group, Input, Button, createStyles, Flex } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  searchBar: {
    width: '100%',
  },
  searchBarInput: {
    flexGrow: 1,
  },
}));

export default function SearchBar() {
  const { classes } = useStyles();
  return (
    <Input
      icon={<IconSearch size="1rem" />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button right={'20px'} size="xs">
          найти
        </Button>
      }
    />
  );
}
