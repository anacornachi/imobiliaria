import axios, {AxiosRequestConfig} from 'axios';
import {getSession} from 'next-auth/react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});

const requestHandler = async (req: AxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    const session = await getSession();
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.jEA1LDxl2QPjecebRiPz1EPRKJSDtLrZwBd1YJxBLW8';

    if (req.headers) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    // if (session?.jwt && req.headers) {
    //   // req.headers.Authorization = `Bearer ${session.jwt}`;
    // }
  }

  return req;
};

api.interceptors.request.use((request) => requestHandler(request));

export default api;
