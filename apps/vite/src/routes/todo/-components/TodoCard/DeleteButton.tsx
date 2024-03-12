import { Button } from '@/components/ui/button';
import { useDeleteTodosId } from '@/lib/tanctack-client';
import { toast } from 'react-toastify';

type DeleteButtonProps = {
  id: number;
};

/**
 * 削除ボタンコンポーネント
 * @param props DeleteButtonProps
 * @returns
 */
export function DeleteButton(props: DeleteButtonProps) {
  const { id } = props;
  const deleteTodo = useDeleteTodosId();

  /**
   * 削除ボタンイベントハンドラー
   */
  const handleClickDeleteButton = async () => {
    await toast.promise(deleteTodo.mutateAsync({ id }), {
      pending: '更新中...',
      success: 'Todoを削除しました',
    });
  };

  return (
    <Button type='button' onClick={() => handleClickDeleteButton()}>
      削除
    </Button>
  );
}
