<script lang="ts">
  import type { Todo, TodoStatus } from "../types/todo";

  let { item }: { item: Todo } = $props();
  let { status, title } = item;
</script>

<li>
  <input
    type="checkbox"
    name="check"
    id={`check-${title}`}
    checked={status === "done"}
  />
  <input type="text" value={item.title} />
</li>

<style>
  .title {
    font-weight: bold;
    color: darkslategray;
  }

  .body {
    color: grey;
  }

  .created-at {
    font-style: italic;
    font-size: 0.8em;
  }
</style>
