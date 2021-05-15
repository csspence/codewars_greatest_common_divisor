/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

const mygcd = (x,y) => {
  let larger = y;
  let smaller = x
  let gcd = 1;
  if(x > y) {
    larger = x;
    smaller = y;
  }
  for(let i = smaller; i > 1; i--) {
    if(x % i === 0 && y % i === 0) {
      gcd = i;
      return i;
    }
  }

  return gcd;
}
