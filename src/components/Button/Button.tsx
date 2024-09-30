import { FC } from 'react';
import { IButton } from './Button.interface';

const Button: FC<IButton> = ({ className = '', children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-[linear-gradient(79deg,#5A60FF_-1.43%,#888CFB_73.22%)] text-white uppercase cursor-pointer p-3 text-center rounded-[10px] font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
