import { API_KEY, BASE_URL } from '../constants/superjobApi';

export const getIndustryCatalog = async () => {
  try {
    const res = await fetch(`${BASE_URL}2.0/catalogues/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
