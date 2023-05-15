import React from 'react';
import {
  Card,
  Title,
  Stack,
  Button,
  Group,
  Select,
  Flex,
  Center,
} from '@mantine/core';
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
    <Card p="lg" style={{ overflow: 'visible' }}>
      <Flex align="center" justify="space-between" mb={32}>
        <Title fz={'xl'}>Фильтры</Title>
        <Button
          fw={500}
          fz={14}
          rightIcon={
            <Center>
              <IconX style={{ paddingTop: '3px' }} width={'10.32px'} />
            </Center>
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
        <Stack spacing="0">
          <Title mb={8} order={5}>
            Отрасль
          </Title>

          <Select
            mb={20}
            c="gray.5"
            rightSectionProps={{ style: { paddingRight: 12 } }}
            rightSection={<IconChevronDown size={14} />}
            placeholder="Выберете отрасль"
            searchable
            data={optionsSelect}
            {...form.getInputProps('industry')}
          />

          <Title mb={8} order={5}>
            Оклад
          </Title>

          <Select
            rightSectionProps={{ style: { paddingRight: 12 } }}
            mb={8}
            placeholder="от"
            searchable
            data={salaryRangesMin}
            {...form.getInputProps('paymentFrom')}
          />

          <Select
            mb={20}
            rightSectionProps={{ style: { paddingRight: 12 } }}
            dropdownPosition="bottom"
            placeholder="до"
            searchable
            data={salaryRangesMax}
            {...form.getInputProps('paymentTo')}
          />
        </Stack>
        <Button
          type="submit"
          variant="filled"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Применить
        </Button>
      </form>
    </Card>
  );
};
