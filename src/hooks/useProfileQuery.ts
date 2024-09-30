import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services';

export const useProfileQuery = () => {
  const profile = useQuery({
    queryKey: ['profile'],
    queryFn: async () =>
      await getProfile({
        bot_username: 'test',
        user_id: '1',
      }),
  });

  return profile;
};
