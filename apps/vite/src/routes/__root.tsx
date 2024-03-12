import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// Create a client
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='flex min-h-screen flex-col items-center justify-between'>
          <Outlet />
        </div>
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
