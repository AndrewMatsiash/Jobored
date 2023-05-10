import {
  API_TOKEN,
  BASE_URL,
  CLIENT_SECRET,
  SECRET_KEY,
} from '../constants/superjobApi';

export const getVacancyById = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}2.0/vacancies/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
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
