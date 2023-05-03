import { useParams } from 'react-router-dom';
import JobCard from '../SearchPage/ components/JobCard';
import { useFetchDataVacancy } from '../../hooks/useFetchDataVacancy';

export const JobPage = () => {
  const { id } = useParams();

  const { vacancy, error, isLoading } = useFetchDataVacancy(id);

  const data = vacancy?.vacancyRichText;

  return (
    <div>
      {!isLoading && vacancy ? (
        <>
          <JobCard vacancy={vacancy} />
          {data && <div dangerouslySetInnerHTML={{ __html: data }} />}
        </>
      ) : null}
    </div>
  );
};
