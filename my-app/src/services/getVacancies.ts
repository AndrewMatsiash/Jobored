import {
  API_TOKEN,
  BASE_URL,
  CLIENT_SECRET,
  SECRET_KEY,
} from '../constants/superjobApi';
import { IVacancy } from '../types/vacancy';

interface response {
  objects: IVacancy[];
  total: 133;
  more: true;
  subscription_id: 0;
  subscription_active: false;
}
export const getVacancies = async (
  page: number,
  text = '',
  industry?: string,
  salaryFrom?: string,
  salaryTo?: string
): Promise<response | undefined> => {
  try {
    let url = `${BASE_URL}2.0/vacancies/?page=${page}&count=4&keyword=${encodeURIComponent(
      text
    )}&published=1&no_agreement=1`;

    if (text) {
      url += `&catalogues=${industry}`;
    }

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
