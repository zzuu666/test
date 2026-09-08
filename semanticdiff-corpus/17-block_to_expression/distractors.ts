function __probeA(value) { log(value); return value; }

afterAll(() => vi.unstubAllGlobals());
it("case", () => run());

function __probeB(value) { log(value); return value; }
