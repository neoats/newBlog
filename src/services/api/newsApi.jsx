import { apiKey, NEWS_API } from "./config";

/* const url_us = NEWS_API + `${apiKey}`; */
const url_us = NEWS_API;

export const getData = async () => {
  console.log(url_us);
  try {
    const response = await fetch(url_us);
    if (!response.ok) {
      throw new Error(errors.netError);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.fetchError);
  }
};
