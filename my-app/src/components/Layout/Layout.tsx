import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1116px',
    margin: '0 auto',
  },
  main: {
    width: '100%',
    minHeight: '100%',
    paddingTop: '40px',
    backgroundColor: '#F5F5F5',
  },
}));

export default function Layout() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Header
          links={[
            { label: 'Поиск вакансий', link: '/' },
            { label: 'Избранное', link: '/favorites' },
          ]}
        />
      </div>

      <main className={classes.main}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
