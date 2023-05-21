import { IVacancy } from '../../../../types/vacancy';
import JobCard from '../JobCard';

interface IVacanciesListProps {
  vacancies: IVacancy[];
}

export const VacanciesList: React.FC<IVacanciesListProps> = ({ vacancies }) => {
  return (
    <>
      {vacancies.map(vacancy => (
        <JobCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </>
  );
};
