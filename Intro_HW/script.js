// 1
// let name = prompt("Enter your name: ")
// alert("Welcome " + name)

// 2
// const currentYear = 2024
// let year = prompt("Enter your birth year: ")
// let age = currentYear - year
// alert(`You are ${age} years old!`)

// 3
// let sideLen = prompt("Enter length of square side: ")
// let perimeter = sideLen * 4
// alert(`Perimeter is ${perimeter}`)

// 4
// const PI = 3.14
// let radius = prompt("Enter radius: ");
// let areaWithPI = ((radius)  2) * Math.PI
// let area = ((radius)  2) * PI
// alert(`Area of circle is ${area} or ${areaWithPI}`)

// 5
// let distance = prompt("Enter the distance from city to city (km): ")
// let time = prompt(Enter the time you want to pass the distance of ${distance} km: )
// let speed = distance / time
// alert(`You avg speed must be ${speed} km/h`)

// 6
// const usdToEuro = 0.93;
// let usd = prompt("Enter USD to convert: ");
// let euro = usd * usdToEuro;
// alert(`${usd}$ is ${euro}€`);

// 7
// const fileSize = 820;
// let flashSize = prompt("Enter flash drive size in gb: ");
// let fileCount = Math.floor((flashSize * 1024) / fileSize); // // Math.floor for INTEGER fileCount
// alert(`There are ${fileCount} possible files in your flash drive`);

// 8
// let money = prompt("Enter your money balance: ")
// let chocolatePrice = prompt("Enter the price of 1 chocolate: ")
// let maxChocolate = Math.floor(money / chocolatePrice)
// let remainder = money % chocolatePrice
// alert(`Your max chocolates are ${maxChocolate} and ${remainder} in remainder`)

// 9
// let number = parseInt(prompt("Enter 3 digit number:"));

// if (number >= 100 && number <= 999) {
//     let hundreds = Math.floor(number / 100);
//     let tens = Math.floor((number % 100) / 10);
//     let units = number % 10;

//     let reversedNumber = units * 100 + tens * 10 + hundreds;
//     alert("Reverse number: " + reversedNumber);
// } else {
//     alert("You entered wrong number");
// }

// 10
// let number = parseInt(prompt("Enter an integer:"));

// let result = (number % 2 === 0) && "Even" || "Odd";

// alert("The number is " + result);