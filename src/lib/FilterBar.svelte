<script lang="ts">
  import { useFilters } from "../data/filterSearch.svelte";
  import { Button } from "$lib/components/ui/button";
  import MageCheckCircleFill from "~icons/mage/check-circle-fill";
  import MageDoubleCircle from "~icons/mage/double-circle";
  import MageMinusCircleFill from "~icons/mage/minus-circle-fill";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import MageArrowUp from "~icons/mage/arrow-up";
  import MageArrowDown from "~icons/mage/arrow-down";
  import { useSort } from "../data/sort.svelte";

  let { filters, toggleFilterStatus } = useFilters();
  let { sorts } = useSort();

  function getCheckboxIndicator(filter: keyof typeof filters) {
    if (filter in filters) {
      const [_, status] = filters[filter]!;
      if (status === "disabled") return MageDoubleCircle;
      if (status === "normal") return MageCheckCircleFill;
      return MageMinusCircleFill;
    } else return MageDoubleCircle;
  }
</script>

<div class="flex gap-2 items-center">
  <Button
    on:click={() => {
      toggleFilterStatus("done");
    }}
    class="border"
    variant="ghost"
  >
    <svelte:component this={getCheckboxIndicator("done")} class="mr-2" />
    <span>Done</span>
  </Button>
  <Separator class="h-10" orientation="vertical" />
  <Button
    on:click={() => {
      toggleFilterStatus("done");
    }}
    class="border"
    variant="ghost"
  >
    <svelte:component this={MageArrowUp} class="mr-2" />
    <span>Sort: Done</span>
  </Button>
</div>
