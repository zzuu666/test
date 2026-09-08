function __probeA(value) { log(value); return value; }

type X<T> = { readonly [K in keyof T]?: T[K] };

function __probeB(value) { log(value); return value; }
