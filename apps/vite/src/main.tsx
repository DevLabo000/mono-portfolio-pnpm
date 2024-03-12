import { MswProvider, ThemeProvider, ToastProvider } from '@/context';
import React from 'react';
import reactDom from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  reactDom.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <ToastProvider>
          <MswProvider>
            <App />
          </MswProvider>
        </ToastProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
