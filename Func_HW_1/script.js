// 1
// function compareNumbers(a, b) {
//     return a < b ? -1 : a > b ? 1 : 0;
// }
// console.log(compareNumbers(5, 3)); // 1

// 2
// function factorial(n) {
//     return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// 3.
// function combineDigits(a, b, c) {
//     return a * 100 + b * 10 + c;
// }
// console.log(combineDigits(1, 4, 9)); // 149

// 4
// function calculateArea(length, width = length) {
//     return length * width;
// }
// console.log(calculateArea(5)); // 25
// console.log(calculateArea(5, 10)); // 50 

// 5
// function isPerfectNumber(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i+=1) {
//         if (num % i === 0) sum += i;
//     }
//     return sum === num;
// }
// console.log(isPerfectNumber(28)); // true

// 6
// function findPerfectNumbers(min, max) {
//     let perfectNumbers = [];
//     for (let i = min; i <= max; i+=1) {
//         if (isPerfectNumber(i)) perfectNumbers.push(i);
//     }
//     return perfectNumbers;
// }
// console.log(findPerfectNumbers(1, 10000)); // [6, 28, 496, 8128]

// 7
// function formatTime(hours, minutes, seconds) {
//     const pad = (num) => String(num).padStart(2, '0');
//     return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// }
// console.log(formatTime(5, 30, 0)); // "05:30:00"

// 8
// function timeToSeconds(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
// }
// console.log(timeToSeconds(1, 30, 15)); //  5415

// 9
// function secondsToTime(seconds) {
//     const hour = Math.floor(seconds / 3600);
//     const minute = Math.floor((seconds % 3600) / 60);
//     const sec = seconds % 60;
//     return formatTime(hour, minute, sec);
// }
// console.log(secondsToTime(5415)); // 01:30:15

// 10
// function dateDifference(h1, m1, s1, h2, m2, s2) {
//     const time1InSeconds = timeToSeconds(h1, m1, s1);
//     const time2InSeconds = timeToSeconds(h2, m2, s2);
//     const differenceInSeconds = Math.abs(time1InSeconds - time2InSeconds);
//     return secondsToTime(differenceInSeconds);
// }
// console.log(dateDifference(5, 25, 55, 15, 55, 5))