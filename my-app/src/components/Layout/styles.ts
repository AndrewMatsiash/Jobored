import { createStyles } from '@mantine/core';
import { COLORS } from '../../constants/style';

export const useStylesLayout = createStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundColor: `${COLORS.LightGray}`,
  },
}));
