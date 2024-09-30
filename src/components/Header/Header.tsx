import { FC, useEffect } from 'react';
import Container from '../Container';
import ProgressBar from '../ProgressBar';

import { useInitData } from '@tma.js/sdk-react';
import {
  JetIcon,
  NoAvatarIcon,
  SoundOffIcon,
  SoundOnIcon,
  VibrationOffIcon,
  VibrationOnIcon,
} from '../../assets/icons';
import { useAudio, useClicker, useProfileQuery, useVibration } from '../../hooks';
import Button from '../Button';

const Header: FC = () => {
  const { data } = useProfileQuery();

  const initData = useInitData();

  const { isPlaying, togglePlay } = useAudio();
  const { isVibration, toggleVibration } = useVibration();
  const { energy, updateEnergy, updateBalance } = useClicker();

  useEffect(() => {
    if (!data) return;

    updateEnergy(data.energy);
    updateBalance(data.balance);
  }, [data, updateBalance, updateEnergy]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateEnergy((prev) => {
        if (prev >= 1000) return prev;

        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [updateEnergy]);

  return (
    <header>
      <Container className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <NoAvatarIcon className='w-10 h-10' />
            <div className='text-sm font-medium'>{initData?.user?.username}</div>
          </div>
          <div className='flex items-center gap-4'>
            <Button className='!p-1' onClick={togglePlay}>
              {!isPlaying ? <SoundOffIcon /> : <SoundOnIcon />}
            </Button>
            <Button className='!p-1' onClick={toggleVibration}>
              {!isVibration ? <VibrationOffIcon /> : <VibrationOnIcon />}
            </Button>
          </div>
        </div>
        <ProgressBar icon={<JetIcon className='z-[1]' />} count={energy} maxCount={1000}>
          {energy}/{1000}
        </ProgressBar>
      </Container>
    </header>
  );
};

export default Header;
