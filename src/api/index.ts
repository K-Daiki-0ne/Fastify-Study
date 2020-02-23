import fetch from 'node-fetch';

export const fetchApi = async() => {
  try {
    const response: any = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: object = await response.json()
    return data
  } catch(err) {
    console.error(err);
  }
};