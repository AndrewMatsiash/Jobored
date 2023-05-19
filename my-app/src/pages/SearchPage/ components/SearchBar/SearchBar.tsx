import React from 'react';
import { Input, Button } from '@mantine/core';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/SearchIcon.svg';

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
      data-elem="search-input"
      w="100%"
      onChange={handleChange}
      icon={<SearchIcon />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button
          data-elem="search-button"
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
