<script lang="ts">
  import { useTodos } from "../data/todo.svelte";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";

  let { add } = useTodos();
  let content = $state("");

  function onSubmit(e: SubmitEvent) {
    add(content);
    content = "";
  }
</script>

<div>
  <form on:submit|preventDefault={onSubmit}>
    <div class="flex items-end gap-2">
      <div>
        <Label for="create-input">New todo</Label>
        <Input
          class="mt-1"
          id="create-input"
          name="new-input"
          type="text"
          bind:value={content}
        />
      </div>
      <Button type="submit">Add</Button>
    </div>
  </form>
</div>
