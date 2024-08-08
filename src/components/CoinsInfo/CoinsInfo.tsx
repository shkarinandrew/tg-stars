import { FC } from 'react';
import { SubtractIcon } from '../../assets/icons';
import { formatNumber } from '../../utils';
import { ICoinsInfo } from './CoinsInfo.interface';

const CoinsInfo: FC<ICoinsInfo> = ({ coins, tapCoins }) => {
  return (
    <div className='text-center flex flex-col items-center relative z-[1]'>
      <div className='text-[48px] font-bold'>{formatNumber(coins)}</div>
      <div className='flex items-center gap-1 text-xs font-medium'>
        <SubtractIcon />
        <span className='bg-[linear-gradient(223deg,#FC7FEB_1.05%,#A25CBE_39.34%,#5F74CF_68.49%,#5978DF_96.77%)] text-transparent bg-clip-text inline-block'>
          +{tapCoins} stars for tap
        </span>
        <SubtractIcon />
      </div>
    </div>
  );
};

export default CoinsInfo;
