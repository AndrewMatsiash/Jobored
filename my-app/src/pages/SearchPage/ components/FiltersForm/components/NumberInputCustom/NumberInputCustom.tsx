import React from 'react';
import { NumberInput, NumberInputProps, Stack } from '@mantine/core';
import { ReactComponent as IconChevronUp } from '../../../../../../assets/icons/iconShevronUp.svg';
import { ReactComponent as IconsChevronDown } from '../../../../../../assets/icons/iconsChevronDown.svg';
import { useFiltersFormContext } from '../../../../../../context/form-context';
import { IDataFilterForm } from '../../FiltersForm';
import { randomId } from '@mantine/hooks';

type Name = keyof IDataFilterForm;

interface NumberInputCustomProps extends NumberInputProps {
  name: Name;
}

export const NumberInputCustom: React.FC<NumberInputCustomProps> = ({
  min,
  name,
  ...props
}) => {
  const [isIncremented, setIsIncremented] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const form = useFiltersFormContext();

  const handleIncrement = () => {
    setIsIncremented(true);
    setValue(prev => prev + 1);
    form.setValues({ [name]: value });
  };

  const handleDecrement = () => {
    if (min !== undefined && value <= min) {
      return;
    }
    setValue(prev => prev - 1);
    form.setValues({ [name]: value });
  };

  return (
    <NumberInput
      {...form.getInputProps(name)}
      rightSection={[
        <Stack key={randomId()} spacing={6.5}>
          <IconChevronUp onClick={handleIncrement} />
          <IconsChevronDown onClick={handleDecrement} />
        </Stack>,
      ]}
      value={isIncremented ? value : ''}
      {...props}
    />
  );
};
