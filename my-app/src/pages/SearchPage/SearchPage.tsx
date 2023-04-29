import { Group } from '@mantine/core';
import FiltersForm from './ components/FiltersForm';

import { Input, Button } from '@mantine/core';

function SearchBar(props) {
  return (
    <Group>
      <Input placeholder="Поиск" />
      <Button>Найти</Button>
    </Group>
  );
}
export const SearchPage = () => {
  return (
    <Group>
      <div>
        <FiltersForm />
      </div>
      <div>
        <SearchBar />
      </div>
    </Group>
  );
};
