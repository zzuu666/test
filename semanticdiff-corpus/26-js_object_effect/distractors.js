function __probeA(value) { log(value); return value; }

let i=0; const x={a: ++i,b: ++i};

function __probeB(value) { log(value); return value; }
