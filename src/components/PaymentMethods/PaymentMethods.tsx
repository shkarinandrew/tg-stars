import { FC, useState } from 'react';

const enum PaymentMethodsEnum {
  CARD = 'CARD',
  USDT = 'USDT',
}

const PaymentMethods: FC = () => {
  const paymentMethods: PaymentMethodsEnum[] = [
    PaymentMethodsEnum.CARD,
    PaymentMethodsEnum.USDT,
  ];

  const [activeTab, setActiveTab] = useState<PaymentMethodsEnum>(paymentMethods[0]);

  const classNameActive = (tab: PaymentMethodsEnum) => {
    if (activeTab === tab) {
      return 'bg-[linear-gradient(79deg,#5A60FF_-1.43%,#888CFB_73.22%)] text-white';
    }

    return 'text-black';
  };

  return (
    <div className='w-[240px] rounded-xl bg-white flex items-center text-center overflow-hidden'>
      {paymentMethods.map((item) => (
        <div
          key={item}
          onClick={() => setActiveTab(item)}
          className={`w-1/2 py-3 text-lg font-bold ${classNameActive(item)}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
