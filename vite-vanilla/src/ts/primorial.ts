function isPrime(num: number) {
  if (num <= 1) {
    return false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function display(n: number) {
  var arr = [2];
  for (var i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function primorial(n: number) {
  return display(n * n)
    .slice(0, n)
    .reduce((a, b) => a * b);
}

export const result = primorial(4);
export const result1 = primorial(3);
export const result2 = primorial(6);
