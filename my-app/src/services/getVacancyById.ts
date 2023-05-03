import { API_KEY, API_TOKEN, BASE_URL } from '../constants/superjobApi';

export const getVacancyById = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}2.0/vacancies/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'x-secret-key': API_KEY,
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
