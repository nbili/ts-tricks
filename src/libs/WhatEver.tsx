type Tuple = ["hello", "world"];

type O = {
  [k in Tuple[number]]: {
    value: "code";
  };
}[Tuple[number]];

export {};
