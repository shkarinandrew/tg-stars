import { useQuery } from '@tanstack/react-query';
import { checkSubscription, DEFAULT_REQUEST_API } from '../services';

export const useCheckSubscriptionQuery = () => {
  const subscrioption = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => await checkSubscription(DEFAULT_REQUEST_API),
  });

  return subscrioption;
};
