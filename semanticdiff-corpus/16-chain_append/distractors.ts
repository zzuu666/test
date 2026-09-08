function __probeA(value) { log(value); return value; }

const x = vi.fn().mockResolvedValue("submitted");

function __probeB(value) { log(value); return value; }
