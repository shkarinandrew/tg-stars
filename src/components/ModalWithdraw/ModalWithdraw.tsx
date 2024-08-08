import { useFormik } from 'formik';
import { FC } from 'react';
import { useModal } from '../../hooks';
import Button from '../Button';
import Input from '../Input';
import PaymentMethods from '../PaymentMethods';

const ModalWithdraw: FC = () => {
  const { onClose } = useModal();

  const formik = useFormik({
    initialValues: {
      details: '',
      amount: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h2 className='text-[48px] font-bold text-white'>Withdraw</h2>
      <p className='text-center text-[#ABABAB] font-bold text-xs'>
        Select a withdrawal method and fill in
        <br />
        your account details, carefully verifying
        <br />
        the accuracy of the entered information
      </p>
      <div className='text-xs font-medium text-center text-white'>Balance: ~1000$</div>
      <PaymentMethods />
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className='flex flex-col gap-3 min-w-[calc(100vw-72px)]'>
          <Input
            label='Details:'
            id='details'
            placeholder='Enter your details'
            {...formik.getFieldProps('details')}
          />
          <Input
            label='Amount:'
            id='amount'
            placeholder='Enter your amount'
            {...formik.getFieldProps('amount')}
          />
        </div>

        <div className='flex flex-col gap-4 mt-9 w-full'>
          <Button type='submit' className='w-full'>
            Withdraw
          </Button>
          <Button onClick={() => onClose()} type='button' className='w-full bg-none'>
            Close
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalWithdraw;
