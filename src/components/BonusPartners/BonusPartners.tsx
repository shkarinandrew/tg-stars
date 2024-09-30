import { FC } from 'react';
import Container from '../Container';

import advertisingImg from '../../assets/imgs/advertising.png';
import { useModal } from '../../hooks';

const BonusPartners: FC = () => {
  const { onOpen, setContentType, setType } = useModal();

  const handleClick = () => {
    setType('center');
    setContentType('subscribe');
    onOpen();
  };

  return (
    <Container
      className='relative h-[110px] mx-4 py-3 px-3.5 border-2 border-[#292929] mb-5 rounded-[20px]'
      style={{
        backgroundImage: `url("${advertisingImg}")`,
        backgroundSize: 'cover',
      }}
    >
      <div className='text-lg font-bold max-w-[200px] uppercase bg-[linear-gradient(223deg,#FC7FEB_1.05%,#A25CBE_39.34%,#5F74CF_68.49%,#5978DF_96.77%)] inline-block text-transparent bg-clip-text'>
        More bonuses with our partners
      </div>
      <div
        className='text-[10px] font-medium underline mt-1 cursor-pointer'
        onClick={handleClick}
      >
        follow the link
      </div>
    </Container>
  );
};

export default BonusPartners;
