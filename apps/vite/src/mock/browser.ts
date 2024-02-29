import { getTodoMock } from '@/lib/swr-client/todo/todo.msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...getTodoMock());
