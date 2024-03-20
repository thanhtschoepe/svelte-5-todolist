<script lang="ts">
  import type { Todo } from "../types/todo";

  type TodoItemProp = { item: Todo; onCheck: (id: Todo["id"]) => void };
  let { item, onCheck }: TodoItemProp = $props();
</script>

<li>
  <input
    type="checkbox"
    name="check"
    id={`check-${item.title}`}
    checked={item.done}
    onchange={() => onCheck(item.id)}
  />
  <input class:strike={item.done} type="text" value={item.title} />
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
  .strike {
    text-decoration: line-through;
  }
</style>
