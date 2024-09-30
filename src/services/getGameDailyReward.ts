import { AxiosResponse } from 'axios';
import { DailyRewardType, ProfyleType, RequestApiType } from '../types';
import { api } from './api';

type ResponseDailyRewardType = Pick<ProfyleType, 'balance'> &
  Pick<DailyRewardType, 'next_reward_at'>;

export const getGameDailyReward = async (params: RequestApiType) => {
  const response = await api.get<RequestApiType, AxiosResponse<ResponseDailyRewardType>>(
    'game/daily-reward',
    {
      params,
    },
  );
  const data = await response.data;

  return data;
};
