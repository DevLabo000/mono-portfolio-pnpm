/**
 * Generated by orval 🍺
 * 手動で編集しないでください。
 * ToDo API
 * ToDoアプリのAPI仕様書
 * OpenAPIスペックバージョン: 1.0.0
 * @ts-nocheck
 */

export type PostTodosBody = {
  /** ToDoの日付 */
  date: string | null;
  /** ToDoが完了したかどうか */
  done: boolean | null;
  /** ToDoが"いいね"されたかどうか */
  nice: boolean | null;
  /** ToDoのタイトル */
  title: string;
};
