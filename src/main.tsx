import { SDKProvider } from '@tma.js/sdk-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  AudioContextProvider,
  ModalContextProvider,
  VibrationContextProvider,
} from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKProvider acceptCustomStyles>
      <AudioContextProvider>
        <VibrationContextProvider>
          <ModalContextProvider>
            <App />
          </ModalContextProvider>
        </VibrationContextProvider>
      </AudioContextProvider>
    </SDKProvider>
  </React.StrictMode>,
);
