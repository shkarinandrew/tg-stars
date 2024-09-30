import { FC } from 'react';
import { DollarIcon } from '../../assets/icons';
import { useClicker, useModal } from '../../hooks';
import { formatNumber } from '../../utils';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

const { VITE_APP_MAX_COUNT } = import.meta.env;

const ModalCash: FC = () => {
  const { balance } = useClicker();
  const { setContentType, setType } = useModal();

  const handleClick = () => {
    if (balance < VITE_APP_MAX_COUNT) return;
    setType('center');
    setContentType('withdraw');
  };

  return (
    <>
      <div className='text-center text-[#ABABAB] font-bold text-xs flex justify-center items-center gap-1'>
        <DollarIcon />
        Your balance
        <DollarIcon />
      </div>
      <h2 className='text-[48px] font-bold text-white leading-none'>
        {formatNumber(VITE_APP_MAX_COUNT)}
      </h2>
      <p className='text-center text-[#ABABAB] font-bold text-xs'>
        You must earn money before withdrawing funds
        <br />
        minimum 500 US dollars.
      </p>
      <ProgressBar
        icon={<DollarIcon className='z-[1]' />}
        count={balance}
        maxCount={VITE_APP_MAX_COUNT}
      >
        500 000 YLU = 100$
      </ProgressBar>
      <Button className='w-full mt-5' onClick={handleClick}>
        Earn more
      </Button>
    </>
  );
};

export default ModalCash;
