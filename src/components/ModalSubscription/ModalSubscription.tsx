import { useUtils } from '@tma.js/sdk-react';
import { FC } from 'react';
import { TelegramIcon } from '../../assets/icons';
import { useProfileQuery } from '../../hooks';
import Button from '../Button';

const ModalSubscription: FC = () => {
  const { data, isLoading, isFetching } = useProfileQuery();

  const util = useUtils();

  const handleSubscribe = () => {
    if (!data) return;

    util.openTelegramLink(data.referral_link);
  };

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
      <Button
        disabled={isLoading || isFetching || !data?.referral_link}
        className='w-full mt-5'
        onClick={handleSubscribe}
      >
        Subscribe
      </Button>
    </>
  );
};

export default ModalSubscription;
