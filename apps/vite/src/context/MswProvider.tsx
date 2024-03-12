import type * as React from 'react';
import { useEffect, useState } from 'react';

/**
 * MSWプロバイダー
 * @param param0
 * @returns
 */
export function MswProvider({ children }: { children: React.ReactNode }) {
  const mockingEnabled = !!import.meta.env.VITE_API_MOCKING;
  const [shouldRender, setShouldRender] = useState(!mockingEnabled);

  useEffect(() => {
    if (import.meta.env.DEV && import.meta.env.VITE_API_MOCKING === 'enabled') {
      import('@/mock').then(async ({ initMocks }) => {
        await initMocks();
        setShouldRender(true);
      });
    }
  }, []);

  return shouldRender ? children : <>Loading mocks...</>;
}
