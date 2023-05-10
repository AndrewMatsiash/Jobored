import './JobCard.css';
import { Card, Flex, Stack, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconMapPin, IconStar } from '@tabler/icons-react';
import { IVacancy } from '../../../../types/vacancy';
import React from 'react';
import { addVacancyToFavorites } from '../../../../utils/addVacancyToFavorites';
import { removeVacancyFromFavorites } from '../../../../utils/removeVacancyFromFavorites';

interface JobCardInterface {
  vacancy: IVacancy;
  onChange?: (data: IVacancy[]) => void;
}

export const JobCard: React.FC<JobCardInterface> = ({ vacancy, onChange }) => {
  const location = useLocation();
  const [isSelect, setIsSelect] = React.useState(
    location.pathname === '/favorites' ? true : false
  );

  const handlerClick = () => {
    setIsSelect(prevIsSelect => !prevIsSelect);
    if (!isSelect) {
      addVacancyToFavorites(vacancy);
    } else {
      const favorites = removeVacancyFromFavorites(vacancy.id);
      if (favorites && onChange) {
        onChange(favorites);
      }
    }
  };

  return (
    <Card shadow="sm" padding={'xl'}>
      <Stack spacing={'sm'}>
        <Flex justify={'end'}>
          <IconStar
            onClick={() => {
              handlerClick();
            }}
            color={isSelect ? 'green' : 'black'}
          />
        </Flex>
        <Text size="xl" weight={600}>
          <Link to={`/job/${vacancy.id}`}>{vacancy.profession}</Link>
        </Text>
        <Flex gap="lg">
          <Text weight={500} c={'myColor.2'}>
            з/п от {vacancy.payment_from} - {vacancy.payment_to} rub
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
