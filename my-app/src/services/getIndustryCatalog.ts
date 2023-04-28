import { API_KEY, BASE_URL } from '../constants/superjobApi';

export const getIndustryCatalog = async () => {
  try {
    const res = await fetch(`${BASE_URL}2.0/catalogues/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': API_KEY,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
