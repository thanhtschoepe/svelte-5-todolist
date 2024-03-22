import type { Todo } from 'src/types/todo';

type Comparator<T> = (a: T, b: T) => number;
type Sort<T extends object> = {
  name: keyof T;
  dir: "asc" | 'desc';
  comparator?: Comparator<T>;
};

let sorts = $state<Sort<Todo>[]>([{
  name: 'done',
  dir: 'asc'
}]);
function compareBySort<T extends object>(a: T, b: T, sort: Sort<T>): number {
  const { name, dir, comparator } = sort;
  const valueA = a[name];
  const valueB = b[name];

  let comparisonResult: number;
  if (comparator) {
    comparisonResult = comparator(a, b);
  } else if (typeof valueA === 'string' && typeof valueB === 'string') {
    comparisonResult = valueA.localeCompare(valueB);
  } else {
    comparisonResult = valueA < valueB ? -1 : (valueA > valueB ? 1 : 0);
  }

  return dir === 'asc' ? comparisonResult : -comparisonResult;
}
export function useSort() {
  function applySort(items: Todo[]): Todo[] {
    return items.toSorted((a, b) => {
      let result = 0;
      for (let sort of sorts) {
        result = compareBySort(a, b, sort);
        if (result !== 0) break;
      }
      return result;
    });
  }

  return {
    get sorts() {
      return sorts;
    },
    applySort,
  };
}
