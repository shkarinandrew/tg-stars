import { FC } from 'react';
import Container from '../Container';
import ProgressBar from '../ProgressBar';

import {
  JetIcon,
  NoAvatarIcon,
  SoundOffIcon,
  SoundOnIcon,
  VibrationOffIcon,
  VibrationOnIcon,
} from '../../assets/icons';
import { useAudio, useVibration } from '../../hooks';
import Button from '../Button';

const Header: FC = () => {
  const { isPlaying, togglePlay } = useAudio();
  const { isVibration, toggleVibration } = useVibration();

  return (
    <header>
      <Container className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <NoAvatarIcon className='w-10 h-10' />

            <div className='text-sm font-medium'>Enot334</div>
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
        <ProgressBar icon={<JetIcon className='z-[1]' />} count={900} maxCount={1000}>
          {900}/{1000}
        </ProgressBar>
      </Container>
    </header>
  );
};

export default Header;
