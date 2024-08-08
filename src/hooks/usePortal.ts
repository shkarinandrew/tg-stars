import React from 'react';
import { createPortal } from 'react-dom';

const isServer = (): boolean => typeof window === `undefined`;

export const usePortal = () => {
  const wrapper = React.useMemo(
    () => (isServer() ? null : document.createElement(`div`)),
    [],
  );

  React.useLayoutEffect(() => {
    if (!wrapper) return;

    document.body.appendChild(wrapper);

    return () => {
      document.body.removeChild(wrapper);
    };
  }, [wrapper]);

  return {
    render: (children: React.ReactNode): React.ReactPortal | null =>
      wrapper ? createPortal(children, wrapper) : null,
  };
};
