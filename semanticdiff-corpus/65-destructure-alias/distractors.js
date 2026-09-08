function __probeA(value) { log(value); return value; }

const {a:local}=source; log(local);

function __probeB(value) { log(value); return value; }
