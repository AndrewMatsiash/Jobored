import React from 'react';
import { getIndustryCatalog } from '../services/getIndustryCatalog';
import { ICategory } from '../types/category';

export const useCategories = () => {
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getIndustryCatalog();
        setCategories(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { categories, isLoading, error };
};
