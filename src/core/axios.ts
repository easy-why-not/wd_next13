import axios, { AxiosInstance } from 'axios';

axios.defaults.baseURL = process.env.public_api;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.public_api,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
