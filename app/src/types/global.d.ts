export {};

declare global {
  interface IfRecord<T = any> {
    [key: string]: T;
  }
}
