<script lang="ts">
  import { useTodos } from "../data/todo.svelte";
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";
  import { compareAsc, formatDistanceToNow } from "date-fns";

  let { todos: todos } = useTodos();
  let asArray = $derived(Object.values(todos));

  let remaining = $derived(asArray.filter((td) => !td.done).length);
  let percentDone = $derived((1 - remaining / asArray.length) * 100);

  let stats = $derived([
    {
      label: "remaining",
      value: remaining,
    },
    {
      label: "total",
      value: asArray.length,
    },
  ]);
</script>

<Card.Root>
  <Card.Header>
    <Progress class="h-1" value={percentDone} />
  </Card.Header>
  <Card.Content>
    <ul class="flex justify-between">
      {#each stats as stat (stat.label)}
        <li>
          <span class="font-bold text-xl">
            {stat.value}
          </span>
          <span>{stat.label}</span>
        </li>
      {/each}
    </ul>
  </Card.Content>
</Card.Root>
