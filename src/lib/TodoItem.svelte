<script lang="ts">
  import type { Todo } from "../types/todo";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import MageTrash2 from "~icons/mage/trash-2";
  import { formatDistanceToNow } from "date-fns";

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
    class={(item.done ? "line-through text-secondary " : "") +
      "h-8 border-none"}
    type="text"
    value={item.title}
    on:change={(e) => onChange(item.id, e.currentTarget.value)}
  />
  <p class="text-secondary whitespace-nowrap">
    {formatDistanceToNow(item.created_at)}
  </p>
  <Button variant="ghost" class="h-8 px-3.5" on:click={() => onRemove(item.id)}>
    <MageTrash2 />
  </Button>
</li>
