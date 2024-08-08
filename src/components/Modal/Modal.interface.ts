import { ModalContextType } from '../../context/ModalContext';

export interface IModal
  extends Omit<
    ModalContextType,
    'onOpen' | 'setType' | 'typeContent' | 'setContentType'
  > {
  className?: string;
  children: React.ReactNode;
}
