import { FC } from 'react';
import BonusPartners from './components/BonusPartners';
import Clicker from './components/Clicker';
import CoinsInfo from './components/CoinsInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import ModalCash from './components/ModalCash';
import ModalDaily from './components/ModalDaily';
import ModalFriends from './components/ModalFriends';
import ModalSubscription from './components/ModalSubscription';
import ModalWithdraw from './components/ModalWithdraw';
import { useClicker, useModal, useProfileQuery } from './hooks';

const App: FC = () => {
  const { data } = useProfileQuery();
  const { open, type, typeContent, onClose } = useModal();
  const { balance } = useClicker();

  return (
    <div className='flex flex-col bg-[#020202] text-white pt-9 select-none overflow-hidden'>
      <Header />
      <main className='h-[calc(100vh-212px)] relative flex flex-col justify-between gap-4'>
        <CoinsInfo tapCoins={data?.tap_reward || 1} coins={balance} />
        <Clicker />
        <BonusPartners />
      </main>
      <Footer />
      <Modal
        type={type}
        open={open}
        onClose={onClose}
        className='flex flex-col items-center gap-4'
      >
        {typeContent === 'subscribe' && <ModalSubscription />}
        {typeContent === 'boost' && <ModalFriends />}
        {typeContent === 'daily' && <ModalDaily />}
        {typeContent === 'withdraw' && <ModalWithdraw />}
        {typeContent === 'cash' && <ModalCash />}
      </Modal>
    </div>
  );
};

export default App;
