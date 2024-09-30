import { useQuery } from '@tanstack/react-query';
import { getGameFriends } from '../services';

export const useGameFriendsQuery = () => {
  const friends = useQuery({
    queryKey: ['gameFriends'],
    queryFn: async () =>
      await getGameFriends({
        bot_username: 'test',
        user_id: '1',
      }),
  });

  return friends;
};
