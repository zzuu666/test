function __probeA(value) { log(value); return value; }

let i = 0;
const x = <C b={++i} a={++i} />;

function __probeB(value) { log(value); return value; }
