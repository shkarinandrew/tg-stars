import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { postProfile, RequestProfileType } from '../services';

export const useProfileMutation = (
  options?: Omit<UseMutationOptions<any, any, RequestProfileType, any>, 'mutationFn'>,
) => {
  const profile = useMutation({
    mutationFn: (body: RequestProfileType) => postProfile(body),
    ...options,
  });

  return profile;
};
