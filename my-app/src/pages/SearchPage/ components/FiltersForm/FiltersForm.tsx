import React from 'react';
import { Card, Title, Stack, Button, Group, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import './FiltersForm.css';
import { useForm } from '@mantine/form';
import { IDataSearch } from '../../SearchPage';
import { useCategories } from '../../../../hooks/useCatecories';

interface IDataSelectIndustry {
  value: string;
  label: string;
}

interface IFiltersFormProps {
  onSearch: (data: IDataSearch) => void;
}

export const FiltersForm: React.FC<IFiltersFormProps> = ({ onSearch }) => {
  const { categories } = useCategories();

  const optionsSelect = categories.reduce<IDataSelectIndustry[]>((acc, c) => {
    return [...acc, { value: c.key.toString(), label: c.title_rus }];
  }, []);

  const salaryRangesMin = [
    '0',
    '30000',
    '50000',
    '80000',
    '120000',
    '160000',
    '200000',
    '300000',
    '500000',
  ];
  const salaryRangesMax = [
    '30000',
    '50000',
    '80000',
    '120000',
    '160000',
    '200000',
    '300000',
    '500000',
    '∞',
  ];

  const form = useForm({
    initialValues: {
      industry: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  const handleSubmit = (event: IDataSearch) => {
    onSearch(event);
  };

  return (
    <Card p="lg">
      <Group>
        <Title order={3}>Фильтры</Title>
        <Button
          onClick={() => {
            form.reset();
          }}
          color="gray"
          variant="white"
        >
          Сбросить все
        </Button>
      </Group>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="sm">
          <Title order={4}>Отрасль</Title>
          <Select
            c="gray.5"
            rightSection={<IconChevronDown />}
            placeholder="Выберете отрасль"
            searchable
            data={optionsSelect}
            {...form.getInputProps('industry')}
          />

          <Title order={4}>Оклад</Title>

          <Select
            placeholder="от"
            searchable
            data={salaryRangesMin}
            {...form.getInputProps('paymentFrom')}
          />

          <Select
            placeholder="до"
            searchable
            data={salaryRangesMax}
            {...form.getInputProps('paymentTo')}
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
};
