import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { postGameWithdrawal, RequestWithdrawalType } from '../services';

export const useGameWithdrawalMutation = (
  options?: Omit<UseMutationOptions<any, any, RequestWithdrawalType, any>, 'mutationFn'>,
) => {
  const profile = useMutation({
    mutationFn: (body: RequestWithdrawalType) => postGameWithdrawal(body),
    ...options,
  });

  return profile;
};
