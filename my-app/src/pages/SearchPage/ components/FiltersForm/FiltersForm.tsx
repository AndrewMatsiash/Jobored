import React from 'react';
import { Card, Title, Stack, Button, Group, Select, Flex } from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import './FiltersForm.css';
import { useForm } from '@mantine/form';
import { useFetchDataCategories } from '../../../../hooks/useFetchCategories';

interface IDataSelectIndustry {
  value: string;
  label: string;
}

export interface IDataFilterForm {
  industry: string;
  paymentFrom: string;
  paymentTo: string;
}

interface IFiltersFormProps {
  onSearch: (data: IDataFilterForm) => void;
}

export const FiltersForm: React.FC<IFiltersFormProps> = ({ onSearch }) => {
  const { categories } = useFetchDataCategories();

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
  ];

  const form = useForm({
    initialValues: {
      industry: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  const handleSubmit = (event: IDataFilterForm) => {
    onSearch(event);
  };

  return (
    <Card p="lg">
      <Flex align="center" justify="space-between">
        <Title order={3}>Фильтры</Title>
        <Button
          rightIcon={
            <IconX
              style={{ paddingTop: '3px' }}
              width={'16px'}
              height={'16px'}
            />
          }
          onClick={() => {
            form.reset();
          }}
          color="gray"
          variant="white"
        >
          Сбросить все
        </Button>
      </Flex>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="sm">
          <Title order={4}>Отрасль</Title>
          <Select
            size="xs"
            c="gray.5"
            rightSection={<IconChevronDown />}
            placeholder="Выберете отрасль"
            searchable
            data={optionsSelect}
            {...form.getInputProps('industry')}
          />

          <Title order={4}>Оклад</Title>

          <Select
            size="xs"
            placeholder="от"
            searchable
            data={salaryRangesMin}
            {...form.getInputProps('paymentFrom')}
          />

          <Select
            size="xs"
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
