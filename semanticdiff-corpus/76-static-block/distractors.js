function __probeA(value) { log(value); return value; }

class C { static { second(); first(); } }

function __probeB(value) { log(value); return value; }
