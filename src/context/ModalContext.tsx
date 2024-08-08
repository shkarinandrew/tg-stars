import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

type ModalType = 'center' | 'bottom';
type ModalContentType = 'withdraw' | 'subscribe' | 'boost' | 'daily' | 'cash';

export type ModalContextType = {
  open: boolean;
  onOpen: (cb?: () => void) => void;
  onClose: (cb?: () => void) => void;
  type: ModalType;
  typeContent: ModalContentType;
  setContentType: Dispatch<SetStateAction<ModalContentType>>;
  setType: Dispatch<SetStateAction<ModalType>>;
};

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalContextProps {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ModalType>('bottom');
  const [typeContent, setContentType] = useState<ModalContentType>('subscribe');

  const onClose = (cb?: () => void) => {
    if (cb) cb();

    setOpen(false);
  };

  const onOpen = (cb?: () => void) => {
    if (cb) cb();

    setOpen(true);
  };

  const contextValue: ModalContextType = {
    open,
    onClose,
    onOpen,
    type,
    setType,
    typeContent,
    setContentType,
  };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};
