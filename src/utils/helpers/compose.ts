export const compose = (...funcs: Function[]) =>
  funcs.reduce(
    (a, b) => (...args: any) => a(b(...args)),
    (arg: any) => arg,
  );
