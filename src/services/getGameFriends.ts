import { AxiosResponse } from 'axios';
import { FriendType, RequestApiType } from '../types';
import { api } from './api';

export const getGameFriends = async (params: RequestApiType) => {
  const response = await api.get<RequestApiType, AxiosResponse<FriendType[]>>(
    'game/friends',
    {
      params,
    },
  );
  const data = await response.data;

  return data;
};
