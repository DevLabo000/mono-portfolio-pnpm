/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * ToDo API
 * ToDoアプリのAPI仕様書
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { GetTodos200Item } from '.././models';

export const getGetTodosResponseMock = (overrideResponse: any = {}): GetTodos200Item[] =>
  Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
    date: faker.date.past().toISOString().split('T')[0],
    done: faker.datatype.boolean(),
    id: faker.number.int({ min: undefined, max: undefined }),
    nice: faker.datatype.boolean(),
    title: faker.word.sample(),
    ...overrideResponse,
  }));

export const getGetTodosMockHandler = (overrideResponse?: GetTodos200Item[]) => {
  return http.get('*/todos', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetTodosResponseMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export const getPostTodosMockHandler = () => {
  return http.post('*/todos', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export const getPatchTodosIdMockHandler = () => {
  return http.patch('*/todos/:id', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export const getDeleteTodosIdMockHandler = () => {
  return http.delete('*/todos/:id', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};
export const getTodoMock = () => [
  getGetTodosMockHandler(),
  getPostTodosMockHandler(),
  getPatchTodosIdMockHandler(),
  getDeleteTodosIdMockHandler(),
];
