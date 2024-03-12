import { GetTodos200Item, usePatchTodosId } from '@/lib/tanctack-client';
import { toast } from 'react-toastify';

type NiceButtonProps = {
  todo: GetTodos200Item;
};

/**
 * いいねボタンコンポーネント
 * @param props NiceButtonProps
 * @returns
 */
export function NiceButton(props: NiceButtonProps) {
  const { todo } = props;
  const updateTodo = usePatchTodosId();

  /**
   * 更新ボタンイベントハンドラー
   */
  const handleClickDeleteButton = async () => {
    await toast.promise(updateTodo.mutateAsync({ id: todo.id, data: todo }), {
      pending: '更新中...',
      success: 'Todoを更新しました',
    });
  };

  return (
    <div
      onClick={() => {
        handleClickDeleteButton();
      }}
      onKeyDown={() => {
        handleClickDeleteButton();
      }}
      className={todo.nice ? 'size-10 fill-pink-600' : 'size-10  text-gray-300 '}
    >
      a
    </div>
  );
}
