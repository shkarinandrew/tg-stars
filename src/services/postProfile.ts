import { RequestApiType } from '../types';
import { api } from './api';

export type RequestProfileType = RequestApiType & {
  energy_spent: number;
};

export const postProfile = async ({
  energy_spent,
  bot_username,
  user_id,
}: RequestProfileType) => {
  const response = await api.post<RequestProfileType, any>(
    `profile?user_id=${user_id}&bot_username=${bot_username}`,
    {
      energy_spent,
    },
  );
  const data = await response.data;

  return data;
};
