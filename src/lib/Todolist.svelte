<script lang="ts">
  import { useTodos } from "../data/todo.svelte.ts";
  import TodoItem from "./TodoItem.svelte";
  import * as Card from "$lib/components/ui/card";

  let { todos, toggleDone, remove, editTitle } = useTodos();
  let hasTodos = $derived([...todos.keys()].length > 0);

  $inspect(hasTodos);
</script>

<section>
  <Card.Root>
    <Card.Header>
      <h1 class="text-2xl font-bold tracking-tight">Your list</h1>
      {#if !hasTodos}
        <p class="text-secondary">No item. Try adding some.</p>
      {/if}
    </Card.Header>
    <Card.Content>
      <ul class="flex flex-col gap-1">
        {#each todos as [id, todo] (id)}
          <TodoItem
            item={todo}
            onCheck={toggleDone}
            onRemove={remove}
            onChange={editTitle}
          />
        {/each}
      </ul>
    </Card.Content>
  </Card.Root>
</section>
