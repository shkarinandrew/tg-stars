import { motion } from 'framer-motion';
import { FC } from 'react';
import { CloseCircleIcon } from '../../assets/icons';
import { useModal, usePortal, useScrollHide } from '../../hooks';
import { IModal } from './Modal.interface';

const Modal: FC<IModal> = ({ className = '', children }) => {
  const { render } = usePortal();
  const { open, type, onClose } = useModal();

  useScrollHide();

  const isCenter = type === 'center';

  const classNameWrapper = isCenter ? 'items-center justify-center p-4' : '';
  const classNameContent = isCenter
    ? 'rounded-[32px] relative'
    : 'w-full rounded-t-[32px] bottom-0 h-fit absolute';

  const classNameTransition = 'transition-all duration-150 ease-linear';

  return render(
    <motion.div
      animate={{
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        display: open ? 'flex' : 'hidden',
      }}
      className={`bg-black/50 z-20 fixed h-[100svh] w-[100svw] left-0 top-0 overflow-y-auto ${classNameWrapper} ${classNameTransition}`}
    >
      <motion.div
        animate={{ opacity: open ? 0.3 : 0 }}
        className={`bg-[radial-gradient(50%_50%_at_50%_50%,#5A60FF_52%,rgba(18,18,18,0.00)_100%)] h-[100svh] w-[200svw] -left-1/2 top-0 fixed ${classNameTransition}`}
      />
      <motion.div
        animate={{
          translateY: open ? 0 : '100%',
        }}
        className={`w-full h-full flex justify-center items-center ${classNameTransition}`}
      >
        <div className={`bg-black m-auto] px-5 py-9 ${classNameContent} ${className}`}>
          {type === 'bottom' && (
            <div className='absolute -top-2 bg-[linear-gradient(79deg,#5A60FF_-1.43%,#888CFB_73.22%)] w-full h-10 -z-[1] rounded-t-[32px]' />
          )}
          <CloseCircleIcon
            className={`absolute right-5 cursor-pointer ${isCenter ? 'top-3' : 'top-5'}`}
            onClick={() => onClose()}
          />
          {children}
        </div>
      </motion.div>
    </motion.div>,
  );
};

export default Modal;
