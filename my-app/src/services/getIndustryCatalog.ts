import { BASE_URL, CLIENT_SECRET, SECRET_KEY } from '../constants/superjobApi';

export const getIndustryCatalog = async () => {
  try {
    const res = await fetch(`${BASE_URL}2.0/catalogues/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': SECRET_KEY,
        'X-Api-App-Id': CLIENT_SECRET,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
