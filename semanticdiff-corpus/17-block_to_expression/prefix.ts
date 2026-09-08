function __probeBefore(input) { return input; }

afterAll(() => {
 if (old === undefined) {
  delete global.x;
  return;
 }
 global.x = old;
});
it("case", () => run());
