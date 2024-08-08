import { ReactNode } from 'react';

export interface IProgressBar {
  count?: number;
  maxCount?: number;
  icon?: ReactNode;
  children?: ReactNode;
}
