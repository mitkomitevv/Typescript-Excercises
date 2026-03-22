export {};

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;
