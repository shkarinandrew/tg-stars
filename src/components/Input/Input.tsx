import { FC } from 'react';

interface IIncout extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Input: FC<IIncout> = ({ id, className = '', label, ...props }) => {
  return (
    <div className='relative w-full'>
      <input
        {...props}
        className={`mt-5 w-full outline-none px-3 py-2 text-xs font-medium rounded-md border-transparent peer focus:border-[#5A60FF] border-[2px] ${className}`}
        id={id}
        type='text'
      />
      <label
        htmlFor={id}
        className='absolute top-0 left-0 text-[#ABABAB] text-xs font-medium peer-focus:text-[#5A60FF]'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
