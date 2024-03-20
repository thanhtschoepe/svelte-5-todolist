<script lang="ts">
  import { useTodos } from "../data/todo.svelte.ts";
  import TodoItem from "./TodoItem.svelte";

  let { todos: items } = useTodos();
</script>

<section>
  <h1>This is a todo list</h1>

  {#if !items.has(0)}
    <p>No items</p>
  {/if}
  <ul>
    {#each [...items.entries()] as [id, item] (id)}
      <TodoItem {item} />
    {/each}
  </ul>
</section>
