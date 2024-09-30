import { useQuery } from '@tanstack/react-query';
import { getGameDailyReward } from '../services';

export const useGameDailyRewardQuery = () => {
  const friends = useQuery({
    queryKey: ['gameDailyReward'],
    queryFn: async () =>
      await getGameDailyReward({
        bot_username: 'test',
        user_id: '1',
      }),
    enabled: false,
  });

  return friends;
};
