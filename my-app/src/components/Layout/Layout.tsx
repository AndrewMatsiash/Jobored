import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Stack, createStyles } from '@mantine/core';
import { COLORS } from '../../constants/style';
import { FAVORITE_PAGE, HOME_PAGE } from '../../constants/router';

const useStyles = createStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    paddingTop: '40px',
    backgroundColor: `${COLORS.LightGray}`,
  },
}));

export default function Layout() {
  const { classes } = useStyles();
  return (
    <Stack h="100%">
      <Header
        links={[
          { label: 'Поиск вакансий', link: `${HOME_PAGE}` },
          { label: 'Избранное', link: `${FAVORITE_PAGE}` },
        ]}
      />

      <main className={classes.main}>
        <Outlet />
      </main>
    </Stack>
  );
}
