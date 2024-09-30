import { useContext } from 'react';
import { ClickerContext } from '../context';

export const useClicker = () => {
  const context = useContext(ClickerContext);

  if (!context) {
    throw new Error('useClicker must be used within a ClickerProvider');
  }

  return context;
};
