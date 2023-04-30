import { Card, Flex, Stack, Text } from '@mantine/core';
import './JobCard.css';
import { Link } from 'react-router-dom';

export default function JobCard(props) {
  const { title, salary, location } = props;

  return (
    <Card shadow="sm" padding={'xl'}>
      <Stack spacing={'sm'}>
        <Text size="xl" weight={500}>
          <Link to="#">Менеджер-дизайнер</Link>
        </Text>
        <Flex gap={'lg'}>
          <Text>з/п от 70000 rub</Text>
          <Text>Полный рабочий день</Text>
        </Flex>
        <Text>Новый Уренгой</Text>
      </Stack>
    </Card>
  );
}
