import { FC } from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import { CloseIcon } from '../../assets/icons';

const Notifications: FC = () => (
  <Toaster>
    {(t) => (
      <ToastBar
        toast={t}
        style={{
          backgroundColor: '#292929',
          borderRadius: '42px',
          fontSize: '12px',
          fontWeight: 500,
          padding: '4px 8px',
          color: 'white',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {({ icon, message }) => (
          <>
            <div className='flex items-center'>
              {icon}
              {message}
            </div>
            {t.type !== 'loading' && (
              <CloseIcon onClick={() => toast.dismiss(t.id)} className='cursor-pointer' />
            )}
          </>
        )}
      </ToastBar>
    )}
  </Toaster>
);

export default Notifications;
