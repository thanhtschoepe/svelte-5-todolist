<script lang="ts">
  import CreateTodo from "./lib/CreateTodo.svelte";
  import Todolist from "./lib/Todolist.svelte";
  import Stats from "./lib/Stats.svelte";
  import { ModeWatcher } from "mode-watcher";
</script>

<main class="container px-16 py-32">
  <section class="grid gap-4">
    <ModeWatcher />
    <CreateTodo />
    <Todolist />
    <Stats />
  </section>
</main>
