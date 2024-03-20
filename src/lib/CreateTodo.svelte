<script lang="ts">
  import { useTodos } from "../data/todo.svelte";

  let { add } = useTodos();
  let content = $state("");

  function onSubmit(e: SubmitEvent) {
    add(content);
    content = "";
  }
</script>

<div>
  <h4>Make new item</h4>
  <form on:submit|preventDefault={onSubmit}>
    <input type="text" bind:value={content} />
    <button type="submit">Create</button>
  </form>
</div>
