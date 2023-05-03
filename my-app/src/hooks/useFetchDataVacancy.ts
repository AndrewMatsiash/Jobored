import React from 'react';
import { IVacancy } from '../types/vacancy';
import { getVacancyById } from '../services/getVacancyById';

export const useFetchDataVacancy = (id: string | undefined) => {
  const [vacancy, setCategories] = React.useState<IVacancy | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const data = await getVacancyById(id);
          setCategories(data);
        }
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return { vacancy, isLoading, error };
};
