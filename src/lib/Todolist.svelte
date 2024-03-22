<script lang="ts">
  import { useTodos } from "../data/todo.svelte.ts";
  import TodoItem from "./TodoItem.svelte";
  import * as Card from "$lib/components/ui/card";
  import { useFilters } from "../data/filterSearch.svelte";
  import { useSort } from "../data/sort.svelte.ts";

  let { todos, toggleDone, remove, editTitle } = useTodos();
  let { applySort } = useSort();
  let { applyFilter } = useFilters();

  let totalCount = $derived(Object.values(todos).length);
  let filtered = $derived(applyFilter(Object.values(todos)));
  let sorted = $derived(applySort(filtered));
  let hasTodos = $derived(filtered.length > 0);
</script>

<section>
  <Card.Root>
    <Card.Header>
      {#if !hasTodos}
        <p class="text-secondary">No item. Try adding some.</p>
      {/if}
    </Card.Header>
    <Card.Content>
      <ul class="flex flex-col gap-1">
        {#each sorted as todo (todo.id)}
          <TodoItem
            item={todo}
            onCheck={toggleDone}
            onRemove={remove}
            onChange={editTitle}
          />
        {/each}
      </ul>
    </Card.Content>
    <Card.Footer>
      {#if totalCount !== filtered.length && !filtered.length}
        <span>You have {totalCount} items hidden by filters.</span>
      {/if}
    </Card.Footer>
  </Card.Root>
</section>
