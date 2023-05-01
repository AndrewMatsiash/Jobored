import React from 'react';
import './SearchBar.css';
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
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
};
