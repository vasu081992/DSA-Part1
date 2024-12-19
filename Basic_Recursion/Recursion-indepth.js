function simpleRecursiveFunction(n) {
  if (n <= 1) {
    console.log(`Base case reached with n=${n}`);
    return;
  }

  // First recursive call
  simpleRecursiveFunction(n - 1);

  // Second recursive call
  simpleRecursiveFunction(n - 2);

  console.log(`After recursive calls: n=${n}`);

  // Normal function call
  helperFunction(n);x
}

function helperFunction(value) {
  console.log(`Helper function called with value=${value}`);
}

simpleRecursiveFunction(4);
