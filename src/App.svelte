<script lang="ts">
  import CreateTodo from "./lib/CreateTodo.svelte";
  import Todolist from "./lib/Todolist.svelte";
  import Stats from "./lib/Stats.svelte";
  import { ModeWatcher } from "mode-watcher";
  import FilterBar from "$lib/FilterBar.svelte";
</script>

<main class="container px-16 py-32">
  <ModeWatcher />
  <section class="grid grid-cols-12 gap-4">
    <div class="col-span-12 grid grid-cols-subgrid items-end gap-8">
      <div class="col-span-4">
        <CreateTodo />
      </div>
      <div class="col-span-8">
        <FilterBar />
      </div>
    </div>
    <div class="col-span-8">
      <Todolist />
    </div>
    <div class="col-span-4">
      <Stats />
    </div>
  </section>
</main>
