import { useQuery } from '@tanstack/react-query';
import { checkSubscription } from '../services';

export const useCheckSubscriptionQuery = () => {
  const subscrioption = useQuery({
    queryKey: ['subscription'],
    queryFn: async () =>
      await checkSubscription({
        bot_username: 'test',
        user_id: '1',
      }),
  });

  return subscrioption;
};
