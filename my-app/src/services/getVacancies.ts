import {
  BASE_URL,
  CLIENT_SECRET,
  COUNT_ELEMENTS_PAGE,
  SECRET_KEY,
} from '../constants/superjobApi';
import { IVacancy } from '../types/vacancy';
import { getAccessToken } from './getAccessToken';

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
    let url = `${BASE_URL}2.0/vacancies/?page=${page}&count=${COUNT_ELEMENTS_PAGE}&keyword=${encodeURIComponent(
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
    console.log(await getAccessToken());

    const res = await fetch(url, {
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
