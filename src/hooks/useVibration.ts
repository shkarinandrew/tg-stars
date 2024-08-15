import { useContext } from 'react';
import { VibrationContext } from '../context';

export const useVibration = () => {
  const context = useContext(VibrationContext);

  if (!context) {
    throw new Error('useVibration must be used within a VibrationProvider');
  }

  return context;
};
