<script lang="ts">
  import { useTodos } from "../data/todo.svelte.ts";
  import TodoItem from "./TodoItem.svelte";

  let { todos, check } = useTodos();
</script>

<section>
  <h1>This is a todo list</h1>

  {#if !todos.has(0)}
    <p>No items</p>
  {/if}
  <ul>
    {#each todos.values() as todo (todo.id)}
      <TodoItem item={todo} onCheck={check} />
    {/each}
  </ul>
</section>
