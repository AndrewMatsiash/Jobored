import './JobCard.css';
import { Card, Flex, Stack, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';
import { IVacancy } from '../../../../types/vacancy';
import React from 'react';
import { addVacancyToFavorites } from '../../../../utils/addVacancyToFavorites';
import { removeVacancyFromFavorites } from '../../../../utils/removeVacancyFromFavorites';
import StarICon from '../../../../components/StarIcon';

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
    <Card maw={773} w="100%" shadow="sm" padding="xl">
      <Stack spacing="sm">
        <Flex justify={'space-between'}>
          <Text size="xl" weight="600" lh="24px">
            <Link to={`/job/${vacancy.id}`}>{vacancy.profession}</Link>
          </Text>
          <StarICon
            onClick={handlerClick}
            fill={isSelect ? '#5E96FC' : 'none'}
            stroke={isSelect ? '#5E96FC' : '#ACADB9'}
          />
        </Flex>

        <Flex gap="lg">
          <Text weight={500} c={'myColor.2'}>
            з/п от {vacancy.payment_from} - {vacancy.payment_to} rub
          </Text>
          <Text display="list-item" lts="disc">
            {vacancy.type_of_work.title}
          </Text>
        </Flex>
        <Flex align="center" gap="11.33px">
          <IconMapPin
            color="#ACADB9"
            style={{
              width: '13.33px',
              height: '16.09px',
            }}
          />
          <Text lh="19px">{vacancy.town.title}</Text>
        </Flex>
      </Stack>
    </Card>
  );
};
