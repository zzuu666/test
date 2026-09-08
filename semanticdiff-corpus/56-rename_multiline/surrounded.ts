const __probeStart = 123;

function calculate(input: number) {
  const result = input + 1;
  log(result);
  save(result);
  return result;
}

const __probeEnd = 456;
