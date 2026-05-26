
// Exercise 1: Temperature Check


let temperature = 18;

// if else statement

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


// switch statement

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;

    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;

    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;

    default:
        console.log("It's warm.");
}



// Exercise 2: Divisibility Check


let number = 6;

// if else statement

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}


// switch statement

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;

    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;

    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;

    default:
        console.log("Not divisible by 2 or 3.");
}



// Exercise 3: For Loops


// 1. Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print even numbers between 1 and 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3. Sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);


// 4. Print array elements

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


// 5. Find the largest number

const numbers2 = [3, 7, 2, 5, 10, 6];

let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}

console.log("Largest Number:", largest);


// Exercise 4: While Loops


// 1. Print numbers from 1 to 10

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// 2. Print even numbers between 1 and 20

let even = 1;

while (even <= 20) {
    if (even % 2 === 0) {
        console.log(even);
    }

    even++;
}


// 3. Sum of numbers from 1 to 100

let count = 1;
let total = 0;

while (count <= 100) {
    total += count;
    count++;
}

console.log("Total:", total);


// 4. Multiples of 5 less than 50

let multiple = 1;

while (multiple < 50) {
    if (multiple % 5 === 0) {
        console.log(multiple);
    }

    multiple++;
}



// Do While Loops


// 1. Print numbers from 1 to 10

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 10);


// 2. Sum of numbers from 1 to 100

let numberSum = 1;
let finalSum = 0;

do {
    finalSum += numberSum;
    numberSum++;
} while (numberSum <= 100);

console.log("Final Sum:", finalSum);


// 3. Enter number greater than 10

let userNumber;

do {
    userNumber = Number(prompt("Enter a number greater than 10:"));
} while (userNumber <= 10);

console.log("Valid Number:", userNumber);


// 4. Guessing game

let secretNumber = 7;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess !== secretNumber) {
        console.log("Wrong guess. Try again.");
    }

} while (guess !== secretNumber);

console.log("Correct! You guessed the number.");