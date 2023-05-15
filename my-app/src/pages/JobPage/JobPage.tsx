import { useParams } from 'react-router-dom';
import JobCard from '../SearchPage/ components/JobCard';
import { useFetchDataVacancy } from '../../hooks/useFetchDataVacancy';
import { Center, Container, Space, Stack } from '@mantine/core';

export const JobPage = () => {
  const { id } = useParams();

  const { vacancy, error, isLoading } = useFetchDataVacancy(id);

  const descriptions = vacancy?.vacancyRichText;

  return (
    <Container maw={773}>
      {!isLoading && vacancy && descriptions ? (
        <Stack spacing="lg">
          <JobCard vacancy={vacancy} />
          <div dangerouslySetInnerHTML={{ __html: descriptions }} />
        </Stack>
      ) : (
        <Center style={{ height: '100%' }}>
          <div>Loading...</div>
        </Center>
      )}
    </Container>
  );
};
