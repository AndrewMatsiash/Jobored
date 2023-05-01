import { API_KEY, API_TOKEN, BASE_URL } from '../constants/superjobApi';
import { IVacancy } from '../types/vacancy';

export const getVacancies = async (
  text = '',
  industry?: string,
  salaryFrom?: string,
  salaryTo?: string
): Promise<IVacancy[] | undefined> => {
  try {
    let url = `${BASE_URL}2.0/vacancies/?count=6&keyword=${encodeURIComponent(
      text
    )}&published=1`;

    if (industry) {
      url += `&catalogues=${industry}`;
    }

    if (salaryFrom) {
      url += `&payment_from=${salaryFrom}`;
    }

    if (salaryTo) {
      url += `&payment_to=${salaryTo}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'x-secret-key': API_KEY,
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
      },
    });

    const data = await res.json();

    return data.objects;
  } catch (error) {
    console.error('Error:', error);
  }
};
