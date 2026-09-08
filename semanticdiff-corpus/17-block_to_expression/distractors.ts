function __probeA(value) { log(value); return value; }

afterAll(() => {
 if (old === undefined) {
  delete global.x;
  return;
 }
 global.x = old;
});
it("case", () => run());

function __probeB(value) { log(value); return value; }
