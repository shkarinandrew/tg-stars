import { createContext, FC, useState } from 'react';

type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

interface AudioContextProps {
  children: React.ReactNode;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const AudioContextProvider: FC<AudioContextProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const contextValue: AudioContextType = {
    isPlaying,
    togglePlay,
  };

  return <AudioContext.Provider value={contextValue}>{children}</AudioContext.Provider>;
};
