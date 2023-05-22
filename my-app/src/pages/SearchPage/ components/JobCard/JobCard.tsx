import { Box, Card, Flex, Stack, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';
import { IVacancy } from '../../../../types/vacancy';
import React from 'react';
import { addVacancyToFavorites } from '../../../../utils/addVacancyToFavorites';
import { removeVacancyFromFavorites } from '../../../../utils/removeVacancyFromFavorites';
import StarICon from '../../../../components/StarIcon';
import { COLORS } from '../../../../constants/style';

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

  const showPaymentJob = () => {
    if (vacancy.payment_from && vacancy.payment_to) {
      return `${vacancy.payment_from}-${vacancy.payment_to}`;
    } else if (vacancy.payment_from && !vacancy.payment_to) {
      return `${vacancy.payment_from}`;
    } else {
      return `от ${vacancy.payment_to}`;
    }
  };

  return (
    <Card
      data-elem={`vacancy-_${vacancy.id}`}
      maw={773}
      w="100%"
      shadow="sm"
      padding="xl"
    >
      <Stack spacing="sm">
        <Flex justify={'space-between'}>
          <Text size="xl" weight="600" lh="24px">
            <Link
              style={{ textDecoration: 'none', color: `${COLORS.BlueMain500}` }}
              to={`/job/${vacancy.id}`}
            >
              {vacancy.profession}
            </Link>
          </Text>
          <Box w={22} h={20}>
            <StarICon
              data-elem={`vacancy-${vacancy.id}-shortlist-button`}
              style={{ cursor: 'pointer' }}
              onClick={handlerClick}
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill={isSelect ? `${COLORS.BlueMain500}` : 'none'}
              stroke={isSelect ? `${COLORS.BlueMain500}` : `${COLORS.Grey500}`}
            />
          </Box>
        </Flex>

        <Flex gap="lg">
          <Text weight={500} c={COLORS.Black}>
            з/п {showPaymentJob()}
          </Text>
          <Text display="list-item" lts="disc">
            {vacancy.type_of_work.title}
          </Text>
        </Flex>
        <Flex align="center" gap="11.33px">
          <IconMapPin
            color={COLORS.Grey500}
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
