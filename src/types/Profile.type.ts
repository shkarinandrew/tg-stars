import { DailyRewardType } from './DailyReward.type';

export type ProfyleType = {
  id: string;
  balance: number;
  energy: number;
  tap_reward: number;
  daily_reward: DailyRewardType;
  referral_link: string;
};
