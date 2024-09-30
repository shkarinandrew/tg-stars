import { RequestApiType } from '../types';
import { api } from './api';

export type RequestWithdrawalType = RequestApiType & {
  amount: number;
};

export const postGameWithdrawal = async ({
  amount,
  bot_username,
  user_id,
}: RequestWithdrawalType) => {
  const response = await api.post<RequestWithdrawalType, any>(
    `game/withdrawal?user_id=${user_id}&bot_username=${bot_username}`,
    {
      amount,
    },
  );
  const data = await response.data;

  return data;
};
