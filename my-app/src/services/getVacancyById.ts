import { BASE_URL, CLIENT_SECRET, SECRET_KEY } from '../constants/superjobApi';
import { getAccessToken } from './getAccessToken';

export const getVacancyById = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}2.0/vacancies/${id}`, {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
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
