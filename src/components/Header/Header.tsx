import { FC } from 'react';
import Container from '../Container';
import ProgressBar from '../ProgressBar';

import { JetIcon, SoundOnIcon, VibrationIcon } from '../../assets/icons';
import NoAvatarImg from '../../assets/imgs/no-avatar.png';
import Button from '../Button';

const Header: FC = () => {
  return (
    <header>
      <Container className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
              <img
                src={NoAvatarImg}
                alt='no avatar'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='text-sm font-medium'>Enot334</div>
          </div>
          <div className='flex items-center gap-4'>
            <Button className='!p-1'>
              <SoundOnIcon />
            </Button>
            <Button className='!p-1'>
              <VibrationIcon />
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
