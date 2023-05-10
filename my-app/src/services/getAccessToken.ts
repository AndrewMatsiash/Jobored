import { API_KEY, BASE_URL } from '../constants/superjobApi';

export let access_token = '';

export const getAccessToken = async () => {
  return fetch(
    `${BASE_URL}2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356
    &client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': API_KEY,
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
