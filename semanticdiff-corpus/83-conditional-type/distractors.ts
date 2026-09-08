function __probeA(value) { log(value); return value; }

type X<T> = T extends number ? A : B;

function __probeB(value) { log(value); return value; }
