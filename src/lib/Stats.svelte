<script lang="ts">
  import { useTodos } from "../data/todo.svelte";

  let { todos } = useTodos();
  let remaining = $derived(
    [...todos.values()].filter((td) => td.status !== "done").length,
  );
</script>

<div>
  <p>
    Remaining: {remaining}
  </p>
</div>
