function __probeBefore(input) { return input; }

function alpha(x) {
  const adjusted = x + 1;
  const doubled = adjusted * 2;
  log(doubled);
  return doubled;
}

function stable0(input) {
  const value = input + 0;
  audit0(value);
  return value;
}

function stable1(input) {
  const value = input + 1;
  audit1(value);
  return value;
}

function stable2(input) {
  const value = input + 2;
  audit2(value);
  return value;
}

function stable3(input) {
  const value = input + 3;
  audit3(value);
  return value;
}

function stable4(input) {
  const value = input + 4;
  audit4(value);
  return value;
}
