import { FC } from 'react';
import { AddUserIcon, CopyIcon, ReloadIcon, ThreeArrowIcon } from '../../assets/icons';
import Button from '../Button';

import noAvatar from '../../assets/imgs/no-avatar.png';

const ModalFriends: FC = () => {
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
        <ReloadIcon />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <div className='bg-[#292929] w-full px-3.5 py-2 rounded-xl flex items-center gap-3.5'>
          <div className='w-10 h-10'>
            <img src={noAvatar} alt='avatar' className='w-full h-full object-cover' />
          </div>
          <div>
            <div className='text-lg font-bold text-white'>V999-Anton</div>
            <div className='text-[10px] font-medium text-[#ABABAB]'>
              +1 stars coin for tap
            </div>
          </div>
        </div>
        <div className='bg-[#292929] w-full px-3.5 py-2 rounded-xl flex items-center gap-3.5'>
          <div className='w-10 h-10'>
            <img src={noAvatar} alt='avatar' className='w-full h-full object-cover' />
          </div>
          <div>
            <div className='text-lg font-bold text-white'>V999-Anton</div>
            <div className='text-[10px] font-medium text-[#ABABAB]'>
              +1 stars coin for tap
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-3 w-full mt-5'>
        <Button className='w-full flex items-center justify-between text-start'>
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
