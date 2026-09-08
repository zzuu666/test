const __probeStart = 123;

try { work(); } catch(e) { report(e); } finally { cleanup(); }

const __probeEnd = 456;
