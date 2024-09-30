import { useQuery } from '@tanstack/react-query';
import { DEFAULT_REQUEST_API, getProfile } from '../services';

export const useProfileQuery = () => {
  const profile = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await getProfile(DEFAULT_REQUEST_API),
  });

  return profile;
};
