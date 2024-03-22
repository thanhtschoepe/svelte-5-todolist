<script lang="ts">
  import { useFilters } from "../data/filterSearch.svelte";
  import { Button } from "$lib/components/ui/button";
  import MageCheckCircleFill from "~icons/mage/check-circle-fill";
  import MageDoubleCircle from "~icons/mage/double-circle";
  import MageMinusCircleFill from "~icons/mage/minus-circle-fill";

  let { filters, toggleFilterStatus } = useFilters();

  function getCheckboxIndicator(filter: keyof typeof filters) {
    if (filter in filters) {
      const [_, status] = filters[filter]!;
      if (status === "disabled") return MageDoubleCircle;
      if (status === "normal") return MageCheckCircleFill;
      return MageMinusCircleFill;
    } else return MageDoubleCircle;
  }
</script>

<div>
  <Button
    on:click={() => {
      toggleFilterStatus("done");
    }}
    aria-label="Checkbox filter done"
    class="border"
    variant="ghost"
  >
    <svelte:component this={getCheckboxIndicator("done")} class="mr-2" />
    <span>Done</span>
  </Button>
</div>
