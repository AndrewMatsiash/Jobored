import './JobCard.css';
import { Card, Flex, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';
import { IVacancy } from '../../../../types/vacancy';

export const JobCard = ({ vacancy }: { vacancy: IVacancy }) => {
  return (
    <Card shadow="sm" padding={'xl'}>
      <Stack spacing={'sm'}>
        <Text size="xl" weight={600}>
          <Link to="#">{vacancy.profession}</Link>
        </Text>
        <Flex gap="lg">
          <Text weight={500} c={'myColor.2'}>
            з/п от {vacancy.payment_from} rub
          </Text>
          <Text display={'list-item'} lts={'disc'}>
            {vacancy.type_of_work.title}
          </Text>
        </Flex>
        <Flex align="center">
          <IconMapPin size={'13px'} />
          <Text ml={'xs'}>{vacancy.town.title}</Text>
        </Flex>
      </Stack>
    </Card>
  );
};
