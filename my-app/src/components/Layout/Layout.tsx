import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header';
import { Center, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1116px',
    minHeight: '100vh',
  },
  main: {
    flex: '1 0 auto',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Layout() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Header
        links={[
          { label: 'Поиск вакансий', link: '/searchPage' },
          { label: 'Избранное', link: '/favorites' },
        ]}
      />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}
