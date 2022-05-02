export const fun = <Arg,>(arg: Arg extends any[] ? `don't do this` : Arg) => {
  return arg;
};

// fun([{ hello: `world` }]);
