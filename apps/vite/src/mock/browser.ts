import { getTodoMock } from '@/lib/tanctack-client/todo/todo.msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...getTodoMock());
