import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header';
import { Stack, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    paddingTop: '40px',
    backgroundColor: '#F5F5F5',
  },
}));

export default function Layout() {
  const { classes } = useStyles();
  return (
    <Stack h="100%">
      <Header
        links={[
          { label: 'Поиск вакансий', link: '/' },
          { label: 'Избранное', link: '/favorites' },
        ]}
      />

      <main className={classes.main}>
        <Outlet />
      </main>
    </Stack>
  );
}
