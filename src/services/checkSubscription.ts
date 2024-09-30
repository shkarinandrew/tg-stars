import { AxiosResponse } from 'axios';
import { CheckSubscriptionType, RequestApiType } from '../types';
import { api } from './api';

export const checkSubscription = async (params: RequestApiType) => {
  const response = await api.get<RequestApiType, AxiosResponse<CheckSubscriptionType>>(
    'game/check-subscription',
    {
      params,
    },
  );
  const data = await response.data;

  return data;
};
