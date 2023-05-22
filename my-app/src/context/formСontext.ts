import { createFormContext } from '@mantine/form';

export interface IDataFilterForm {
  industry: string;
  paymentFrom: string;
  paymentTo: string;
}
export const [FiltersFormProvider, useFiltersFormContext, useFiltersForm] =
  createFormContext<IDataFilterForm>();
