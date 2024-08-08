import { FC } from 'react';
import { CloseCircleIcon } from '../../assets/icons';
import { usePortal, useScrollHide } from '../../hooks';
import { IModal } from './Modal.interface';

const Modal: FC<IModal> = ({ className = '', children, open, onClose, type }) => {
  const { render } = usePortal();

  useScrollHide();

  const classNameOpen = open ? 'flex' : 'hidden';
  const classNameWrapper = type === 'center' ? 'items-center justify-center p-4' : '';
  const classNameContent =
    type === 'center'
      ? 'max-w-[350px] rounded-[32px] relative'
      : 'w-full rounded-t-[32px] bottom-0 h-fit absolute';

  return render(
    <div
      className={`bg-black/50 fixed z-20 h-[100svh] w-[100svw] left-0 top-0 overflow-y-auto ${classNameWrapper} ${classNameOpen}`}
    >
      <div className='bg-[radial-gradient(50%_50%_at_50%_50%,#5A60FF_52%,rgba(18,18,18,0.00)_100%)] h-[100svh] w-[200svw] -left-1/2 top-0 fixed opacity-30' />
      <div className={`bg-black m-auto] px-5 py-9 ${classNameContent} ${className}`}>
        {type === 'bottom' && (
          <div className='absolute -top-2 bg-[linear-gradient(79deg,#5A60FF_-1.43%,#888CFB_73.22%)] w-full h-10 -z-[1] rounded-t-[32px]'></div>
        )}
        <CloseCircleIcon
          className='absolute right-5 top-2.5 cursor-pointer'
          onClick={() => onClose()}
        />
        {children}
      </div>
    </div>,
  );
};

export default Modal;
