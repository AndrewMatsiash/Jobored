import { Card, Text } from '@mantine/core';
import './JobCard.css';
import { Link } from 'react-router-dom';

export default function JobCard(props) {
  const { title, salary, location } = props;

  return (
    <Card shadow="sm">
      <Text size="xl" weight={500}>
        <Link to="#">Менеджер-дизайнер</Link>
      </Text>
      <Text>з/п от 70000 rub</Text>
      <Text>Новый Уренгой</Text>
    </Card>
  );
}
