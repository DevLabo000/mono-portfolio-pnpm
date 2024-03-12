import { Card, CardContent } from '@/components/ui/card';
import { useGetTodosSuspense } from '@/lib/tanctack-client';
import { DeleteButton } from './DeleteButton';
import { NiceButton } from './NiceButton';

/**
 * TODOカードコンポーネント
 * @returns
 */
export function TodoCard() {
  const { data: todos } = useGetTodosSuspense();

  return Number(todos?.data.length) > 0 ? (
    todos?.data?.map((todo) => (
      <Card key={todo.id} className='mb-2 w-[650px]'>
        <CardContent className='flex justify-between pt-6'>
          <p> {todo.title}</p>
          <div className='flex space-x-3 pt-6'>
            <NiceButton todo={todo} />
            <DeleteButton id={todo.id} />
          </div>
        </CardContent>
      </Card>
    ))
  ) : (
    <>データがありません。</>
  );
}

export default TodoCard;
