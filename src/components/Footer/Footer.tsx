import { FC } from 'react';
import { useModal } from '../../hooks';
import { navigateList } from './Footer.config';

const Footer: FC = () => {
  const { onOpen, setContentType, setType } = useModal();

  const handleClick = (name: string) => {
    switch (name) {
      case navigateList[0].title:
        break;
      case navigateList[1].title:
        setType('bottom');
        setContentType('boost');
        onOpen();
        break;
      case navigateList[2].title:
        setType('bottom');
        setContentType('daily');
        onOpen();
        break;
      case navigateList[3].title:
        setType('center');
        setContentType('withdraw');
        onOpen();
        break;
    }
  };

  return (
    <footer className='grid items-center grid-cols-4 text-[#ABABAB] pb-9'>
      {navigateList.map((item, index) => (
        <div
          key={`navigate-${index}`}
          className={`relative pt-2 flex flex-col items-center justify-center before:content-[""] before:absolute before:top-0 before:block before:w-full before:h-[3px] ${item.classNameWrapper}`}
          onClick={() => handleClick(item.title)}
        >
          <item.icon />
          <div className={`text-sm font-bold ${item.classNameActiveText || ''}`}>
            {item.title}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
