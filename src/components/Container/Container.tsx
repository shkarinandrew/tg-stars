import { FC } from 'react';
import { IContainer } from './Container.interface';

const Container: FC<IContainer> = ({ className = '', children, ...props }) => {
  return (
    <div {...props} className={`px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
