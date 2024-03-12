import { createFileRoute } from '@tanstack/react-router';
import { TodoPresenter } from './-components/TodoPresenter';

export const Route = createFileRoute('/todo')({
  component: () => <TodoPresenter />,
});
