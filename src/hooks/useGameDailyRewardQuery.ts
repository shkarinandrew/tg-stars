import { useQuery } from '@tanstack/react-query';
import { DEFAULT_REQUEST_API, getGameDailyReward } from '../services';

export const useGameDailyRewardQuery = () => {
  const friends = useQuery({
    queryKey: ['gameDailyReward'],
    queryFn: async () => await getGameDailyReward(DEFAULT_REQUEST_API),
    enabled: false,
  });

  return friends;
};
