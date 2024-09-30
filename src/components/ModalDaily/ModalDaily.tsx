import { FC } from 'react';
import { SealIcon, StarIcon } from '../../assets/icons';
import { useGameDailyRewardQuery, useProfileQuery } from '../../hooks';
import Button from '../Button';

const ModalDaily: FC = () => {
  const {
    data: profile,
    isLoading: isLoadingProfile,
    isFetching: isFetchingProfile,
    refetch: refetchProfile,
  } = useProfileQuery();
  const { refetch, isFetching } = useGameDailyRewardQuery();

  const handleRefetch = async () => {
    await refetch();
    refetchProfile();
  };

  const isDisabled =
    isLoadingProfile ||
    isFetching ||
    isFetchingProfile ||
    !profile?.daily_reward.accepted;

  return (
    <>
      <h2 className='text-[48px] font-bold bg-[linear-gradient(166deg,#FC7FEB_0.29%,#A25CBE_42.72%,#5F74CF_75.02%,#5978DF_106.35%)] text-transparent bg-clip-text inline-block'>
        Daily gift
      </h2>
      <div className='flex items-center gap-1'>
        <StarIcon className='w-4 h-4' />
        <p className='text-center text-[#ABABAB] font-bold text-xs'>
          Collect coins for daily entry into
          <br />
          the game without skipping.
          <br />
          The "GET BONUS”
        </p>
        <StarIcon className='w-4 h-4' />
      </div>

      <div className='bg-[radial-gradient(50%_50%_at_50%_50%,#5A60FF_0%,rgba(18,18,18,0.00)100%)] h-[300px] w-[300px] absolute bottom-[20px]' />

      <div className='w-screen overflow-hidden pt-1 flex items-center justify-center gap-3 rounded-xl text-white z-0 mt-6'>
        <div className='rounded-xl relative bg-black min-w-[35%] text-center before:content-[""] before:w-full before:h-5 before:bg-[#ABABAB] before:absolute before:top-0 before:left-0 before:-z-[1] before:-translate-y-1 before:rounded-t-xl'>
          <SealIcon className='mx-auto' />
        </div>
        <div className='rounded-xl relative bg-black py-4 min-w-[50%] text-center before:content-[""] before:w-full before:h-5 before:bg-[linear-gradient(320deg,#FC7FEB_0.29%,#A25CBE_42.72%,#5F74CF_75.02%,#5978DF_106.35%)] before:absolute before:top-0 before:left-0 before:-z-[1] before:-translate-y-1 before:rounded-t-xl'>
          <div className='text-2xl font-medium'>Day {profile?.daily_reward.day}</div>
          <StarIcon className='mx-auto' />
          <div className='text-[38px] font-bold'>{profile?.daily_reward.amount}</div>
        </div>
        <div className='rounded-xl relative bg-black py-4 min-w-[35%] text-center before:content-[""] before:w-full before:h-5 before:bg-[linear-gradient(320deg,#FC7FEB_0.29%,#A25CBE_42.72%,#5F74CF_75.02%,#5978DF_106.35%)] before:absolute before:top-0 before:left-0 before:-z-[1] before:-translate-y-1 before:rounded-t-xl'>
          <div className='text-xs font-medium'>
            Day {(profile?.daily_reward.day || 1) + 1}
          </div>
          <StarIcon className='mx-auto' />
          <div className='text-2xl font-bold'>
            {profile?.daily_reward.future_day_reward_amount}
          </div>
        </div>
      </div>
      <Button disabled={isDisabled} className='w-full mt-3 z-10' onClick={handleRefetch}>
        GET BONUS
      </Button>
    </>
  );
};

export default ModalDaily;
