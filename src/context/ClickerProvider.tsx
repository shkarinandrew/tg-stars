import { createContext, FC, useState } from 'react';

type ClickerContextType = {
  energy: number;
  balance: number;
  updateEnergy: React.Dispatch<React.SetStateAction<number>>;
  updateBalance: React.Dispatch<React.SetStateAction<number>>;
};

interface ClickerContextProps {
  children: React.ReactNode;
}

export const ClickerContext = createContext<ClickerContextType | null>(null);

export const ClickerContextProvider: FC<ClickerContextProps> = ({ children }) => {
  const [energy, setEnergy] = useState(0);
  const [balance, setBalance] = useState(0);

  const contextValue: ClickerContextType = {
    energy,
    balance,
    updateEnergy: setEnergy,
    updateBalance: setBalance,
  };

  return (
    <ClickerContext.Provider value={contextValue}>{children}</ClickerContext.Provider>
  );
};
