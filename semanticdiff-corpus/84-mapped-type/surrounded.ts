const __probeStart = 123;

type X<T> = { readonly [K in keyof T]?: T[K] };

const __probeEnd = 456;
