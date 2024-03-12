import { z } from 'zod';
import { todoFormSchema } from '../-schema';

/**
 * TODO FORM TYPE定義
 */
export type TodoFormType = z.infer<typeof todoFormSchema>;
