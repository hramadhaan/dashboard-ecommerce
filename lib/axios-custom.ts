import axios, { type AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://shop-api.haniframadhan.my.id",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
