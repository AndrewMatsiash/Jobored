import {
  BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  HR,
  LOGIN,
  PASSWORD,
  SECRET_KEY,
} from '../constants/superjobApi';

export const getAccessToken = async () => {
  const data = localStorage.getItem('access_token');

  if (data) {
    return data;
  }

  try {
    const res = await fetch(
      `${BASE_URL}2.0/oauth2/password/?login=${LOGIN}&password=${PASSWORD}
    &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&hr=${HR}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': SECRET_KEY,
        },
      }
    );
    const data = await res.json();

    localStorage.setItem('access_token', data.access_token);
    return data.access_token;
  } catch (error) {
    console.log('Error', error);
  }
};
