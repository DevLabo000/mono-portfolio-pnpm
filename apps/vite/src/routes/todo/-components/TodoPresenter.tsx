import { Suspense } from 'react';
import { TodoCard } from './TodoCard';
import { TodoForm } from './TodoForm';

/**
 * TODOコンポーネント プレゼンテーション層
 * @summary 表示を提供する。
 * @param props
 * @returns
 */
export function TodoPresenter() {
  return (
    <div className='flex-col'>
      <TodoForm />
      <div className='mt-10'>
        <Suspense fallback={'Loading...'}>
          <TodoCard />
        </Suspense>
      </div>
    </div>
  );
}

export default TodoPresenter;
