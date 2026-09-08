function __probeBefore(input) { return input; }

type X<T> = { readonly [K in keyof T]?: T[K] };
