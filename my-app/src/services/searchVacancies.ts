import { BASE_URL, API_KEY, API_TOKEN } from '../constants/superjobApi';
import { IVacancy } from '../types/vacancy';

export const searchVacancies = async (
  query: string
): Promise<IVacancy[] | undefined> => {
  try {
    const res = await fetch(
      `${BASE_URL}2.0/vacancies/?published=1&count=4&keyword=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          'x-secret-key': API_KEY,
          Authorization: `Bearer ${API_TOKEN}`,
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      }
    );

    const data = await res.json();
    return data.objects;
  } catch (error) {
    console.error('Error:', error);
  }
};
