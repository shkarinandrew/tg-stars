import { useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useClicker, useGameWithdrawalMutation, useModal } from '../../hooks';
import Button from '../Button';
import Input from '../Input';
import PaymentMethods from '../PaymentMethods';
import { validationSchema } from './ModalWithdraw.config';

const ModalWithdraw: FC = () => {
  const { onClose } = useModal();
  const { balance } = useClicker();

  const queryClient = useQueryClient();

  const { mutate } = useGameWithdrawalMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      onClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      details: '',
      amount: '',
    },
    validationSchema: validationSchema(balance),
    onSubmit: (values) => {
      mutate({ bot_username: 'test', user_id: '1', amount: parseInt(values.amount, 10) });
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
      <form onSubmit={formik.handleSubmit} className='min-w-[calc(100vw-72px)]'>
        <div className='flex flex-col gap-3 w-full'>
          <Input
            label='Details:'
            id='details'
            placeholder='Enter your details'
            className={
              formik.touched.details && formik.errors.details ? '!border-red-500' : ''
            }
            classNameLabel={
              formik.touched.details && formik.errors.details ? '!text-red-500' : ''
            }
            {...formik.getFieldProps('details')}
          />
          <Input
            label='Amount:'
            id='amount'
            placeholder='Enter your amount'
            className={
              formik.touched.amount && formik.errors.amount ? '!border-red-500' : ''
            }
            classNameLabel={
              formik.touched.amount && formik.errors.amount ? '!text-red-500' : ''
            }
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
