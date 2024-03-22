export function negate<F extends (...args: any[]) => boolean>(fn: F): (...args: Parameters<F>) => boolean {
  return function (...args: Parameters<F>): boolean {
    // The `apply` method is more appropriate here than `call` for spreading arguments
    return !fn.apply(null, args);
  }
}
