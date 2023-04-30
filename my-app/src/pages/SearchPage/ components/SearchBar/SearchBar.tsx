import React from 'react';
import './SearchBar.css';
import { Group, Input, Button, createStyles, Flex } from '@mantine/core';

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
      style={{ paddingRight: '20px' }}
      // icon={<IconBrandTwitte size="1rem" />}
      placeholder="Your twitter"
      rightSection={<Button style={{ marginRight: '10px' }}>найти</Button>}
    />
  );
}
