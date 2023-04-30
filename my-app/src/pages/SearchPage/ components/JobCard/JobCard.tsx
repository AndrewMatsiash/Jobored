import { Card, Flex, Stack, Text } from '@mantine/core';
import './JobCard.css';
import { Link } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';

export default function JobCard(props) {
  const { title, salary, location } = props;

  return (
    <Card shadow="sm" padding={'xl'}>
      <Stack spacing={'sm'}>
        <Text size="xl" weight={600}>
          <Link to="#">Менеджер-дизайнер</Link>
        </Text>
        <Flex gap="lg">
          <Text weight={500} c={'myColor.2'}>
            з/п от 70000 rub
          </Text>
          <Text display={'list-item'} lts={'disc'}>
            Полный рабочий день
          </Text>
        </Flex>
        <Flex align="center">
          <IconMapPin size={'13px'} />
          <Text ml={'xs'}>Новый Уренгой</Text>
        </Flex>
      </Stack>
    </Card>
  );
}
