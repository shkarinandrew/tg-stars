import { createContext, FC, useState } from 'react';

type VibrationContextType = {
  isVibration: boolean;
  toggleVibration: () => void;
};

interface VibrationContextProps {
  children: React.ReactNode;
}

export const VibrationContext = createContext<VibrationContextType | null>(null);

export const VibrationContextProvider: FC<VibrationContextProps> = ({ children }) => {
  const [isVibration, setIsVibration] = useState(true);

  const toggleVibration = () => setIsVibration((prev) => !prev);

  const contextValue: VibrationContextType = {
    isVibration,
    toggleVibration,
  };

  return (
    <VibrationContext.Provider value={contextValue}>{children}</VibrationContext.Provider>
  );
};
