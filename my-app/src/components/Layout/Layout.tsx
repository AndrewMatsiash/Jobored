import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Flex, Stack, createStyles } from '@mantine/core';
import { COLORS } from '../../constants/style';
import { FAVORITE_PAGE, HOME_PAGE } from '../../constants/router';
import { useStylesLayout } from './styles';

export default function Layout() {
  const { classes } = useStylesLayout();
  return (
    <Flex direction="column" h="100%">
      <Header
        links={[
          { label: 'Поиск вакансий', link: `${HOME_PAGE}` },
          { label: 'Избранное', link: `${FAVORITE_PAGE}` },
        ]}
      />

      <main className={classes.main}>
        <Outlet />
      </main>
    </Flex>
  );
}
