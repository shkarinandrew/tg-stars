import { FC } from 'react';
import { DollarIcon } from '../../assets/icons';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

const ModalCash: FC = () => {
  return (
    <>
      <div className='text-center text-[#ABABAB] font-bold text-xs flex justify-center items-center gap-1'>
        <DollarIcon />
        Your balance
        <DollarIcon />
      </div>
      <h2 className='text-[48px] font-bold text-white leading-none'>5 000 000</h2>
      <p className='text-center text-[#ABABAB] font-bold text-xs'>
        You must earn money before withdrawing funds
        <br />
        minimum 500 US dollars.
      </p>
      <ProgressBar icon={<DollarIcon className='z-[1]' />} count={900} maxCount={1000}>
        500 000 YLU = 100$
      </ProgressBar>
      <Button className='w-full mt-5'>Earn more</Button>
    </>
  );
};

export default ModalCash;
