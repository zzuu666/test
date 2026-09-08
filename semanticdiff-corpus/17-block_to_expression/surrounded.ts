const __probeStart = 123;

afterAll(() => {
 if (old === undefined) {
  delete global.x;
  return;
 }
 global.x = old;
});
it("case", () => run());

const __probeEnd = 456;
