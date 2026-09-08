function __probeBefore(input) { return input; }

type X<T> = { [K in keyof T]: T[K] };
