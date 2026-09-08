function __probeA(value) { log(value); return value; }

type X<T> = { [K in keyof T]: T[K] };

function __probeB(value) { log(value); return value; }
