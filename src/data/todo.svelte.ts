import type { Todo } from '../types/todo';
import { Map } from 'svelte/reactivity';

const seedTodos: Todo[] = [
  {
    id: 1,
    title: "Grocery shopping",
    body: "Need to buy eggs, milk, bread, and coffee.",
    status: "done",
    created_at: "2023-03-01T09:00:00.000Z",
    owner: "me",
  },
  {
    id: 2,
    title: "Read a book",
    body: "Finish reading 'Sapiens' by Yuval Noah Harari.",
    status: "in progress",
    created_at: "2023-03-05T10:30:00.000Z",
    owner: "me",
  },
  {
    id: 3,
    title: "Workouts",
    body: "Complete a 30-minute cardio session.",
    status: "in progress",
    owner: "me",
    created_at: "2023-03-10T16:45:00.000Z",
  },
  {
    id: 4,
    title: "Call the bank",
    body: "Ask about the new savings account options.",
    status: "in progress",
    owner: "me",
    created_at: "2023-03-12T11:20:00.000Z",
  },
  {
    id: 5,
    title: "Plan weekend getaway",
    body: "Look for a nice place for the upcoming long weekend.",
    status: "done",
    created_at: "2023-03-15T07:00:00.000Z",
    owner: "me",
  },
];

export function useTodos() {
  let todos = new Map(seedTodos.map(td => [td.id, td]));
  let _id = $state(seedTodos.length);

  $inspect(_id)

  return {
    get todos() {
      return todos;
    },
    add: (content: string) => {
      if (!content) return;

      _id += 1;
      const id = _id;
      const item = {
        id,
        title: content,
        owner: 'me',
        created_at: Date.now().toString(),
        status: 'init' as const
      }
      console.log({
        id, item, todos
      })
      todos.set(id, item);
    }
  }
}
