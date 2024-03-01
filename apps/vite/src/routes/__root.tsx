import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex min-h-screen flex-col items-center justify-between'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
