import React from 'react';
import {
  Card,
  Title,
  Stack,
  Button,
  Select,
  Flex,
  Center,
  Box,
  NumberInput,
} from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
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

  const resetValuesFieldsForm = () => {
    form.reset();
  };
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
    <Box style={{ flexBasis: '315px' }}>
      <Card p="lg" style={{ overflow: 'visible' }}>
        <Flex align="center" justify="space-between" mb="32">
          <Title fz="xl">Фильтры</Title>
          <Button
            type="reset"
            fw={500}
            fz={14}
            rightIcon={
              <Center>
                <IconX style={{ paddingTop: '3px' }} width="10.32px" />
              </Center>
            }
            onClick={resetValuesFieldsForm}
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
              data-elem="industry-select"
              mb={20}
              c="gray.5"
              rightSectionProps={{ style: { paddingRight: 12 } }}
              rightSection={<IconChevronDown />}
              placeholder="Выберете отрасль"
              searchable
              data={optionsSelect}
              {...form.getInputProps('industry')}
            />

            <Title mb={8} order={5}>
              Оклад
            </Title>

            <NumberInput
              data-elem="salary-from-input"
              rightSectionProps={{
                style: {
                  marginRight: '12px',
                },
              }}
              mb={20}
              styles={{
                control: {
                  borderColor: 'transparent',
                },
              }}
              min={0}
              placeholder="от"
              withAsterisk
              {...form.getInputProps('paymentFrom')}
            />

            <NumberInput
              data-elem="salary-to-input"
              rightSectionProps={{
                style: {
                  marginRight: '12px',
                },
              }}
              mb={20}
              styles={{
                control: {
                  borderColor: 'transparent',
                },
              }}
              min={0}
              placeholder="от"
              withAsterisk
              {...form.getInputProps('paymentTo')}
            />
          </Stack>
          <Button
            data-elem="search-button"
            type="submit"
            variant="filled"
            w="100%"
          >
            Применить
          </Button>
        </form>
      </Card>
    </Box>
  );
};
