function __probeA(value) { log(value); return value; }

try { work(); } catch(e) { report(e); }

function __probeB(value) { log(value); return value; }
