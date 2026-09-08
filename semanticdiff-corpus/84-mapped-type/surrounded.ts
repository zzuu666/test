const __probeStart = 123;

type X<T> = { [K in keyof T]: T[K] };

const __probeEnd = 456;
