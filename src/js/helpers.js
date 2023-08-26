import { async } from 'regenerator-runtime';

export const getJSON = async function (url) {
  try {
    // 1. Loading recipe from API
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
