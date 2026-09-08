function __probeA(value) { log(value); return value; }

type X<T> = T extends string ? A : B;

function __probeB(value) { log(value); return value; }
