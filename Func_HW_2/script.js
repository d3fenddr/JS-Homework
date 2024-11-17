// 1
// function power(base, exponent) {
//     if (exponent === 0) return 1;
//     return base * power(base, exponent - 1);
// }
// console.log(power(2, 3)); // 8

// 2
// function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
// }
// console.log(gcd(48, 18)); // 6

// 3
// function findMaxDigit(num) {
//     num = Math.abs(num);
//     if (num < 10) return num;
//     return Math.max(num % 10, findMaxDigit(Math.floor(num / 10)));
// }
// console.log(findMaxDigit(27493)); // 9

// 4
// function isPrime(num, divisor = Math.floor(num / 2)) {
//     if (num <= 1) return false;
//     if (divisor === 1) return true;
//     if (num % divisor === 0) return false;
//     return isPrime(num, divisor - 1);
// }
// console.log(isPrime(7)); // true

// 5
// function findFactors(num, factor = 2, result = []) {
//     if (num <= 1) return result;
//     if (num % factor === 0) {
//         result.push(factor);
//         return findFactors(num / factor, factor, result);
//     }
//     return findFactors(num, factor + 1, result);
// }
// console.log(findFactors(18).join(' * ')); // 2 * 3 * 3

// 6
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6)); // 8