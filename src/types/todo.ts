export type TodoStatus = 'init' | 'in progress' | 'done';

export type Todo = {
  id: number;
  created_at: string;
  owner: string;
  body?: string;
  status: TodoStatus;
  title: string;
}
