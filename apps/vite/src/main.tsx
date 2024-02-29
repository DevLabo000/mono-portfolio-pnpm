import { MswProvider, ThemeProvider } from '@/context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MswProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MswProvider>
    </React.StrictMode>,
  );
}
