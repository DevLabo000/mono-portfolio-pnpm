import type { z } from 'zod';
import type { todoFormSchema } from '../-schema';

/**
 * TODO FORM TYPE定義
 */
export type TodoFormType = z.infer<typeof todoFormSchema>;
