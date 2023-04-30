import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header';
import { Center, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1116px',
    margin: '0 auto',
    minHeight: '100vh',
  },
  main: {
    puddingTop: '40px',
    width: '100%',
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
