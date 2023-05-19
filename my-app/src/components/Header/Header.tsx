import {
  createStyles,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const useStyles = createStyles(theme => ({
  header: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  header_container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },

  logo_container: {
    flex: '0 1 421px',
    [theme.fn.smallerThan('md')]: {
      flexBasis: '250px',
    },
    [theme.fn.smallerThan('xs')]: {
      flexGrow: 1,
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    zIndex: 1,
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: '20px',
    fontWeight: 400,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      Color: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export default function Header({ links }: HeaderProps) {
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

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
