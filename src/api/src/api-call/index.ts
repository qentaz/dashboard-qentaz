import { get, post } from "../base";

export const getData = (url: string) =>
  get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });

export const postData = (url: string, data: unknown) =>
  post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
