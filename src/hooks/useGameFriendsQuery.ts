import { useQuery } from '@tanstack/react-query';
import { DEFAULT_REQUEST_API, getGameFriends } from '../services';

export const useGameFriendsQuery = () => {
  const friends = useQuery({
    queryKey: ['gameFriends'],
    queryFn: async () => await getGameFriends(DEFAULT_REQUEST_API),
  });

  return friends;
};
