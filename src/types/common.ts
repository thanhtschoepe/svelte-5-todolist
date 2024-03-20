export type MapById<DType extends { id: number | string | Symbol }> = Map<DType['id'], DType>;
