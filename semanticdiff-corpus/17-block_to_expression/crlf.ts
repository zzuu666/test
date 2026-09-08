// Windows line endings
afterAll(() => {
 if (old === undefined) {
  delete global.x;
  return;
 }
 global.x = old;
});
it("case", () => run());
