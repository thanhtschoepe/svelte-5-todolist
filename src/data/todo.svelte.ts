import type { Todo } from '../types/todo';

const seedTodos: Todo[] = [
  {
    id: 1,
    title: "Grocery shopping",
    body: "Need to buy eggs, milk, bread, and coffee.",
    done: true,
    created_at: "2023-03-01T09:00:00.000Z",
    owner: "me",
  },
  {
    id: 2,
    title: "Read a book",
    body: "Finish reading 'Sapiens' by Yuval Noah Harari.",
    done: false,
    created_at: "2023-03-05T10:30:00.000Z",
    owner: "me",
  },
  {
    id: 3,
    title: "Workouts",
    body: "Complete a 30-minute cardio session.",
    done: false,
    owner: "me",
    created_at: "2023-03-10T16:45:00.000Z",
  },
  {
    id: 4,
    title: "Call the bank",
    body: "Ask about the new savings account options.",
    done: false,
    owner: "me",
    created_at: "2023-03-12T11:20:00.000Z",
  },
  {
    id: 5,
    title: "Plan weekend getaway",
    body: "Look for a nice place for the upcoming long weekend.",
    done: true,
    created_at: "2023-03-15T07:00:00.000Z",
    owner: "me",
  },
];


let repo = $state(Object.fromEntries(seedTodos.map(td => [td.id, td])));
let _id = $state(seedTodos.length);


export function useTodos() {
  return {
    get todos() {
      return repo;
    },
    add: (content: string) => {
      if (!content) return;
      _id += 1;
      const id = _id;

      repo[id] = {
        id,
        title: content,
        owner: 'me',
        created_at: new Date().toISOString(),
        done: false
      };

    },
    toggleDone(id: Todo['id']) {
      let item = repo[id];
      if (!item) return;

      item.done = !item.done;
      repo[id] = item;
    },
    remove(id: Todo['id']) {
      delete repo[id];
    },
    editTitle(id: Todo['id'], newTitle: string) {
      const item = repo[id];
      if (!item) return;

      item.title = newTitle;
      repo[id] = item;
    },

  }
}
