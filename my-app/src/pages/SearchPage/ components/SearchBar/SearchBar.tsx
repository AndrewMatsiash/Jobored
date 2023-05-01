import React from 'react';
import './SearchBar.css';
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { getVacancies } from '../../../../services/getVacancies';
import { IVacancy } from '../../../../types/vacancy';

interface SearchBarProps {
  onSearch: (data: IVacancy[]) => void;
  setIsLoading: (boolean: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  setIsLoading,
}) => {
  const [searchText, setSearchText] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const data = await getVacancies(searchText);
    if (data) {
      onSearch(data);
      setIsLoading(false);
    }
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
