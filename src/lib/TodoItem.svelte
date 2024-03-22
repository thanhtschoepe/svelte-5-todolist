<script lang="ts">
  import type { Todo } from "../types/todo";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import DeleteIcon from "~icons/ep/delete-filled";

  type TodoItemProp = {
    item: Todo;
    onCheck: (id: Todo["id"]) => void;
    onRemove: (id: Todo["id"]) => void;
    onChange: (id: Todo["id"], newTitle: string) => void;
  };
  let { item, onCheck, onRemove, onChange }: TodoItemProp = $props();
</script>

<li class="flex items-center gap-2">
  <Checkbox
    name="check"
    id={`check-${item.title}`}
    checked={item.done}
    onCheckedChange={() => onCheck(item.id)}
  />
  <Input
    class={(item.done ? "line-through" : "") + " h-8 border-none"}
    type="text"
    value={item.title}
    on:change={(e) => onChange(item.id, e.currentTarget.value)}
  />
  <Button variant="ghost" class="h-8 px-3.5" on:click={() => onRemove(item.id)}>
    <DeleteIcon />
  </Button>
</li>
