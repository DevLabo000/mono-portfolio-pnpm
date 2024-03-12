import { useTheme } from '@/context/ThemeProvider';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <>
      <ToastContainer
        position='bottom-left'
        limit={3}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      {children}
    </>
  );
}
