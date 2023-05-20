import React from 'react';
import { getIndustryCatalog } from '../services/getIndustryCatalog';
import { ICategory } from '../types/category';

export const useFetchDataCategories = () => {
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getIndustryCatalog();
        if (data) {
          setCategories(data);
        }
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { categories, isLoading, error };
};
