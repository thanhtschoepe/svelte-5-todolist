<script lang="ts">
  import CreateTodo from "./lib/CreateTodo.svelte";
  import Todolist from "./lib/Todolist.svelte";
  import Stats from "./lib/Stats.svelte";
  import { ModeWatcher } from "mode-watcher";
</script>

<main class="container px-16 py-32">
  <ModeWatcher />
  <section class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <CreateTodo />
    </div>
    <div class="col-span-8">
      <Todolist />
    </div>
    <div class="col-span-4">
      <Stats />
    </div>
  </section>
</main>
