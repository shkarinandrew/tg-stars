import { useUtils } from '@tma.js/sdk-react';
import { FC } from 'react';
import { AddUserIcon, CopyIcon, ReloadIcon, ThreeArrowIcon } from '../../assets/icons';
import { useGameFriendsQuery, useProfileQuery } from '../../hooks';
import Button from '../Button';
import ListFriends from '../ListFriends';

const ModalFriends: FC = () => {
  const { refetch } = useGameFriendsQuery();
  const { data, isLoading, isFetching } = useProfileQuery();

  const utils = useUtils();

  const shareReferralLink = () => {
    utils.shareURL(data?.referral_link || '');
  };

  return (
    <>
      <div className='text-center text-[#ABABAB] font-bold text-xs flex justify-center items-center gap-1'>
        <ThreeArrowIcon />
        Your invitations
        <ThreeArrowIcon />
      </div>
      <h2 className='text-[48px] font-bold text-white leading-none'>40 Friends</h2>
      <p className='text-center text-[#ABABAB] font-bold text-xs'>
        Invite friends to increase your
        <br />
        loot level coins
      </p>

      <div className='h-0.5 w-screen bg-[#292929]' />
      <div className='text-base font-medium text-white flex items-center justify-between w-full'>
        <div>List of invited friends</div>
        <ReloadIcon onClick={() => refetch()} />
      </div>

      <ListFriends />

      <div className='flex items-center gap-3 w-full mt-5'>
        <Button
          disabled={!data?.referral_link || isLoading || isFetching}
          className='w-full flex items-center justify-between text-start'
          onClick={shareReferralLink}
        >
          <div className='flex flex-col'>
            <div>Invite your friend</div>
            <div className='text-[10px] font-medium normal-case'>
              +1 TG stars coin for tap
            </div>
          </div>
          <AddUserIcon />
        </Button>
        <Button className='p-4'>
          <CopyIcon />
        </Button>
      </div>
    </>
  );
};

export default ModalFriends;
