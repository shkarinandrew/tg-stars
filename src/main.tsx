import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SDKProvider } from '@tma.js/sdk-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  AudioContextProvider,
  ClickerContextProvider,
  ModalContextProvider,
  VibrationContextProvider,
} from './context';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SDKProvider acceptCustomStyles>
        <ClickerContextProvider>
          <AudioContextProvider>
            <VibrationContextProvider>
              <ModalContextProvider>
                <App />
              </ModalContextProvider>
            </VibrationContextProvider>
          </AudioContextProvider>
        </ClickerContextProvider>
      </SDKProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
