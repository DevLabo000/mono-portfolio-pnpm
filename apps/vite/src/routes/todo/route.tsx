import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todo')({
  component: () => <div>Hello /todos!</div>,
});
