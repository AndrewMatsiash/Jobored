import {
  Card,
  Title,
  Stack,
  Button,
  CloseButton,
  Group,
  Select,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import './FiltersForm.css';

export default function FiltersForm() {
  const handleSubmit = event => {
    event.preventDefault();
    // Обработка данных формы
  };

  return (
    <Card p="lg">
      <Group>
        <Title order={3}>Фильтры</Title>
        <Button
          color="gray"
          rightIcon={<CloseButton aria-label="reset form" />}
          variant="white"
        >
          Сбросить все
        </Button>
      </Group>

      <form onSubmit={handleSubmit}>
        <Stack spacing="sm">
          <Title order={4}>Отрасль</Title>
          <Select
            c="gray.5"
            rightSection={<IconChevronDown />}
            placeholder="Выберете отрасль"
            searchable
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />

          <Title order={4}>Оклад</Title>

          <Select placeholder="от" searchable data={['1', '2', '3', '3']} />

          <Select
            placeholder="до"
            searchable
            nothingFound="No options"
            data={['10', '20', '30', '40']}
          />
        </Stack>
        <Button
          type="submit"
          variant="outline"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Применить
        </Button>
      </form>
    </Card>
  );
}
