import React from 'react';
import './SearchBar.css';
import { Input, Button, createStyles, Flex } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { getVacancies } from '../../../../services/getVacancies';

export default function SearchBar({ onSearch, setIsLoading }) {
  const [searchText, setSearchText] = React.useState('');

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const data = await getVacancies(searchText);
    onSearch(data);
    setIsLoading(false);
  };

  return (
    <Input
      onChange={handleChange}
      icon={<IconSearch size="1rem" />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button onClick={handleSearch} right={'20px'} size="xs">
          найти
        </Button>
      }
    />
  );
}
