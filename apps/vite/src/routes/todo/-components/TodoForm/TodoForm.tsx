import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PostTodosBody, usePostTodos } from '@/lib/tanctack-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todoFormSchema } from '../../-schema';
import { TodoFormType } from '../../-types';

/**
 * Todoフォームコンポーネント
 * @returns
 */
export function TodoForm() {
  const post = usePostTodos();
  // react-hook-form利用宣言
  const form = useForm<TodoFormType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: '',
    },
  });

  /**
   * 登録ボタン押下時のイベントハンドラー
   * @param data
   * @returns
   */
  const onSubmit = async (data: TodoFormType) => {
    if (!data) return;
    const postData: PostTodosBody = {
      ...data,
      date: null,
      nice: null,
      done: null,
    };
    await toast.promise(post.mutateAsync({ data: postData }), {
      pending: '更新中...',
      success: 'Todoを登録しました',
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex justify-center space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>タスク名</FormLabel>
              <FormControl>
                <Input placeholder='タスクを入力してください。' {...field} className='w-64' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='ml-2' disabled={!form.formState.isValid || form.formState.isValidating}>
          登録
        </Button>
      </form>
    </Form>
  );
}

export default TodoForm;
