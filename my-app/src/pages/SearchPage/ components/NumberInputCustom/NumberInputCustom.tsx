import { NumberInput, NumberInputProps, Stack } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import React from 'react';
import { ReactComponent as IconChevronUp } from '../../../../assets/icons/IconChevronUp.svg';
import { ReactComponent as IconsChevronDown } from '../../../../assets/icons/chevronDown.svg';
import { useFiltersFormContext } from '../../../../context/formContext';
import { IDataFilterForm } from '../FiltersForm/FiltersForm';

type Name = keyof IDataFilterForm;

interface NumberInputCustomProps extends NumberInputProps {
  name: Name;
}

export const NumberInputCustom: React.FC<NumberInputCustomProps> = ({
  min,
  name,
  ...props
}) => {
  const form = useFiltersFormContext();

  const value = isNaN(parseInt(form.values[name]))
    ? ''
    : Number(form.values[name]);

  const handleIncrement = () => {
    form.setValues({ [name]: Number(value) + 1 });
  };

  const handleDecrement = () => {
    if (min !== undefined && Number(value) <= min) {
      return;
    }
    form.setValues({ [name]: Number(value) - 1 });
  };

  return (
    <NumberInput
      rightSection={[
        <Stack key={randomId()} spacing={6.5}>
          <IconChevronUp onClick={handleIncrement} />
          <IconsChevronDown onClick={handleDecrement} />
        </Stack>,
      ]}
      {...form.getInputProps(name)}
      value={value}
      {...props}
    />
  );
};
