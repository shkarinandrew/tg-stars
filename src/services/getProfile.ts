import { AxiosResponse } from 'axios';
import { ProfyleType, RequestApiType } from '../types';
import { api } from './api';

export const getProfile = async (params: RequestApiType) => {
  const response = await api.get<RequestApiType, AxiosResponse<ProfyleType>>('profile', {
    params,
  });
  const data = await response.data;

  return data;
};
