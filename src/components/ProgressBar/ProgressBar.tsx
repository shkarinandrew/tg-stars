import { FC } from 'react';
import { IProgressBar } from './ProgressBar.interface';

const ProgressBar: FC<IProgressBar> = ({ icon, count = 0, maxCount = 0, children }) => {
  return (
    <div className='text-white relative w-full overflow-hidden h-6 rounded-[40px] bg-[#292929] flex items-center'>
      <div
        className='absolute top-0 left-0 h-full bg-[linear-gradient(268deg,#5978DF_-44.18%,#5F74CF_12.29%,#A25CBE_70.52%,#FC7FEB_146.99%)]'
        style={{
          width: `${(count / maxCount) * 100}%`,
        }}
      />
      <div className='flex items-center gap-2 px-3'>
        {icon}
        <div className='relative text-xs font-bold'>{children}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
