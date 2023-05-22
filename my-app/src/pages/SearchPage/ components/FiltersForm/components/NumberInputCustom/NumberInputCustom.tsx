import { NumberInput, NumberInputProps, Stack } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import React from 'react';
import { ReactComponent as IconChevronUp } from '../../../../../../assets/icons/iconChevronUp.svg';
import { ReactComponent as IconsChevronDown } from '../../../../../../assets/icons/iconsChevronDown.svg';
import { useFiltersFormContext } from '../../../../../../context/formСontext';
import { IDataFilterForm } from '../../FiltersForm';

type Name = keyof IDataFilterForm;

interface NumberInputCustomProps extends NumberInputProps {
  name: Name;
}

export const NumberInputCustom: React.FC<NumberInputCustomProps> = ({
  min,
  name,
  ...props
}) => {
  const [hasIncremented, setHasIncremented] = React.useState(false);

  const form = useFiltersFormContext();

  const value = parseInt(form.values[name]);

  const handleIncrement = () => {
    setHasIncremented(true);
    form.setValues({ [name]: value + 1 });
  };

  const handleDecrement = () => {
    if (min !== undefined && value <= min) {
      return;
    }
    form.setValues({ [name]: value - 1 });
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
      value={hasIncremented ? value : ''}
      {...props}
    />
  );
};
