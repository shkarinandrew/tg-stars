import { FC } from 'react';
import { NoAvatarIcon } from '../../assets/icons';
import { useGameFriendsQuery } from '../../hooks';

const ListFriends: FC = () => {
  const { data } = useGameFriendsQuery();

  if (!data?.length) {
    return (
      <div className='h-[110px] rounded-[20px] bg-[#292929] w-full flex justify-center items-center text-[#ABABAB] font-medium text-[10px]'>
        You haven't invited anyone yet
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2 w-full'>
      {data?.map((item, index) => (
        <div
          key={index}
          className='bg-[#292929] w-full px-3.5 py-2 rounded-xl flex items-center gap-3.5'
        >
          <NoAvatarIcon className='w-10 h-10' />
          <div>
            <div className='text-lg font-bold text-white'>
              {[item.first_name, item.last_name].join(' ')}
            </div>
            <div className='text-[10px] font-medium text-[#ABABAB]'>
              +1 stars coin for tap
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListFriends;
