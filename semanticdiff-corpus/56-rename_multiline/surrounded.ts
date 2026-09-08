const __probeStart = 123;

function calculate(input: number) {
  const subtotal = input + 1;
  log(subtotal);
  save(subtotal);
  return subtotal;
}

const __probeEnd = 456;
