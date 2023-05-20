import { useParams } from 'react-router-dom';
import JobCard from '../SearchPage/ components/JobCard';
import { useFetchDataVacancy } from '../../hooks/useFetchDataVacancy';
import { Center, Container, Loader, Stack } from '@mantine/core';

export const JobPage = () => {
  const { id } = useParams();

  const { vacancy, isLoading } = useFetchDataVacancy(id);

  const descriptions = vacancy?.vacancyRichText;

  return (
    <Container maw={793} mx={'auto'} w="100%" px={10}>
      {!isLoading && vacancy && descriptions ? (
        <Stack spacing="lg">
          <JobCard vacancy={vacancy} />
          <div dangerouslySetInnerHTML={{ __html: descriptions }} />
        </Stack>
      ) : (
        <Center style={{ height: '100%' }}>
          <Loader />
        </Center>
      )}
    </Container>
  );
};
