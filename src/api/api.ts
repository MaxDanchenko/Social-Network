import axios from 'axios'

type HeadersType = {
  [key: string]: string;
};
type InstanceType = {
  withCredentials: boolean;
  baseURL: string;
  headers: HeadersType;
};
export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '423a99c6-9db2-4edc-a2b0-3fcc90632f08' },
} as InstanceType)
