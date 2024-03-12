import { createFileRoute } from '@tanstack/react-router';
import { TodoPresenter } from './-components';

export const Route = createFileRoute('/todo')({
  component: () => <TodoPresenter />,
});
