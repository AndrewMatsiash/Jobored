import React from 'react';
import {
  Card,
  Title,
  Stack,
  Button,
  Select,
  Flex,
  Box,
  NumberInput,
} from '@mantine/core';
import { useFetchDataCategories } from '../../../../hooks/useFetchCategories';
import { ReactComponent as IconX } from '../../../../assets/icons/crossIcon.svg';
import { ReactComponent as IconChevronDown } from '../../../../assets/icons/IconChevronDown.svg';
import NumberInputCustom from './components/NumberInputCustom';
import {
  FiltersFormProvider,
  useFiltersForm,
} from '../../../../context/form-context.ts';

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

  const form = useFiltersForm({
    initialValues: {
      industry: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  const handleSubmit = (event: IDataFilterForm) => {
    console.log(event);

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
            rightIcon={<IconX />}
            onClick={resetValuesFieldsForm}
            color="gray"
            variant="white"
          >
            Сбросить все
          </Button>
        </Flex>
        <FiltersFormProvider form={form}>
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

              <NumberInputCustom
                placeholder="от"
                mb={20}
                min={0}
                withAsterisk
                data-elem="salary-from-input"
                name="paymentFrom"
              />

              <NumberInputCustom
                placeholder="до"
                mb={20}
                min={0}
                withAsterisk
                data-elem="salary-to-input"
                name="paymentTo"
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
        </FiltersFormProvider>
      </Card>
    </Box>
  );
};
