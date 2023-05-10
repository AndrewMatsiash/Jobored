import {
  BASE_URL,
  CLIENT_SECRET,
  HR,
  LOGIN,
  PASSWORD,
  SECRET_KEY,
} from '../constants/superjobApi';

export let access_token = '';

export const getAccessToken = async () => {
  return fetch(
    `${BASE_URL}2.0/oauth2/password/?login=${LOGIN}&password=${PASSWORD}}
    &client_secret=${CLIENT_SECRET}8&hr=${HR}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': SECRET_KEY,
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      access_token = data.access_token;
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
};
