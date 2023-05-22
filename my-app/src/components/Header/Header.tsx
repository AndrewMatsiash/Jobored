import {
  Burger,
  Container,
  Flex,
  Group,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { useStylesHeader } from './styles';

interface HeaderProps {
  links: { link: string; label: string }[];
}

export default function Header({ links }: HeaderProps) {
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStylesHeader();

  const items = links.map(link => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: location.pathname === link.link,
      })}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container maw="1116px" p="xl" className={classes.header_container}>
        <Flex className={classes.logo_container}>
          <Logo />
        </Flex>
        <Group spacing={60} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
}
