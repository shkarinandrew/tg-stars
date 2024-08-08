import { FC } from 'react';
import { TelegramIcon } from '../../assets/icons';
import Button from '../Button';

const ModalSubscription: FC = () => {
  return (
    <>
      <h2 className='text-[48px] font-bold text-white'>Subscription</h2>
      <TelegramIcon />
      <p className='text-center text-[#ABABAB] font-bold text-xs'>
        To withdraw funds, you need
        <br />
        to have a subscription.
        <br />
        After clicking the "Subscribe" button,
        <br />
        you should attempt the withdrawal again.
      </p>
      <Button className='w-full mt-5'>Subscribe</Button>
    </>
  );
};

export default ModalSubscription;
