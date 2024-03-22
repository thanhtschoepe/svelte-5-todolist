import type { Todo } from 'src/types/todo';
import { negate } from '../utils/fn';

type Predicate<T extends object> = (el: T) => boolean;
type Filters<T extends object> = { [k in keyof T]?: [
  fn: Predicate<T>,
  status: "normal" | "flipped" | "disabled"
];
}

let filters = $state<Filters<Todo>>({
  done: [item => item.done, 'disabled']
});
export function useFilters() {

  return {
    get filters() {
      return filters;
    },
    applyFilter(data: Todo[]) {
      const aggregateFilter: Predicate<Todo> = (item) => Object.values(filters).reduce((acc, next) => {
        let [fn, status] = next;
        if (status === "disabled") {
          return acc;
        }

        return acc && status === 'flipped' ? negate(fn)(item) : fn(item);
      }, true);

      return data.filter(aggregateFilter);
    },
    toggleFilterStatus(name: keyof typeof filters) {
      if (name in filters) {
        const [pred, status] = filters[name]!;
        let newStatus: "normal" | "flipped" | "disabled";

        if (status === "normal") {
          newStatus = "flipped";
        } else if (status === 'flipped') {
          newStatus = "disabled"
        } else {
          newStatus = "normal"
        }

        filters[name] = [pred, newStatus]
      }
    }
  }
}

