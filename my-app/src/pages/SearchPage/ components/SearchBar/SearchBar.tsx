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
      w="100%"
      onChange={handleChange}
      icon={<IconSearch style={{ width: '14px', height: '14px' }} />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button
          radius={8}
          onClick={handleSearch}
          right="20px"
          size="xs"
          mr="12px"
        >
          найти
        </Button>
      }
    />
  );
};
