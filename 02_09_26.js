function capitalizeFirstLetter(str1) {
    return str1[0].toUpperCase() + str1.slice(1);
}

let myStr = "root"
// console.log(capitalizeFirstLetter(myStr));

function reverseString(str) {
    let result = "";
    for (letter of str) {
        result = letter + result;
    }
    return result
}

// console.log(reverseString('myStr'))

function countVowels(str) {
    var vowels = "aeiou";
    let counter = 0;
    for (letter of str) {
       counter += vowels.includes(letter.toLowerCase()) ? 1 : 0; 
    }
    return counter;
}

// console.log(countVowels(myStr + "a"));

function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

console.log(truncateText(myStr, 2))

function removeSpaces(str) {
    let result = '';
    for (letter of str) {
        result += letter != " " ? letter : '';
    }
    return result;
}

let sentense = "jhsfbe skjbhf lkkk hhhh .";
// console.log(removeSpaces(sentense));

// arrays
let array = [1, 2, 3, 4];

const sumArray = arr => arr.reduce((acc, item) => acc+item, 0)

console.log(sumArray(array));

const filterEvenNumbers = arr => arr.filter(item => item % 2 === 0)

// console.log(filterEvenNumbers(array));

// 3. Напиши функцию findMax(arr), которая находит и возвращает
// максимальное число в массиве. Гарантируется, что массив не пустой и
// содержит только числа.

function findMax(arr) {
   return Math.max(...arr);
}

// console.log(findMax(array));

// 4. Напиши функцию flattenArray(arr), которая «расплющивает» массив
// на один уровень. Например, [[1, 2], [3, [4]]] -> [1, 2, 3, [4]] (только первый
// уровень вложенности).

function flattenArray(arr) {
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            for (const itemOfItem of item) {
                result.push(itemOfItem);
            }
        }
        else result.push(item);
    }
    return result;
}

// console.log(flattenArray([1, [1, 2], [3, [4]]]));


// 5. Напиши функцию uniqueValues(arr), которая возвращает массив
// уникальных значений, сохраняя порядок первого появления. Например, [1,
// 2, 2, 3, 1] -> [1, 2, 3].

function uniqueValues(arr) {
    let result = [];
    for (const item of arr) {
        if (!result.includes(item)) result.push(item);
    }
    return result;
}

// console.log(uniqueValues([1, 2, 2, 3, 1]))

// cycles 

// 1. Напиши функцию printNumbers(n), которая выводит в консоль все
// числа от 1 до n включительно с помощью цикла.

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    return 0;
}

// printNumbers(8);


// 2. Напиши функцию calculateFactorial(n), которая вычисляет факториал
// числа n с помощью цикла (например, 5! = 1 * 2 * 3 * 4 * 5).

function calculateFactorial(n) {
    let answ = 1;
    for (let i = 1; i <= n; i++) {
        answ *=i;
    }
    return answ
}

// console.log(calculateFactorial(5));


// 3. Напиши функцию generateMultiplicationTable(n), которая с помощью
// вложенных циклов выводит таблицу умножения для числа n от 1 до 10.
// Каждая строка — это n * i = результат.

function generateMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, ' * ', i, ' = ', n * i);
    }
    return 0
}

// generateMultiplicationTable(2);

// 4. Напиши функцию sumOfDigits(num), которая считает сумму цифр
// числа с помощью цикла. Например, 123 -> 1 + 2 + 3 = 6. Число может быть
// положительным.

function sumOfDigits(num) {
    let i = num;
    let answer = 0;
    while (i > 0) {
        answer += i % 10;
        i = Math.floor(i / 10);
    }
    return answer;
}

// console.log(sumOfDigits(185)) 


// 5. Напиши функцию repeatString(str, count), которая повторяет строку
// count раз и возвращает результат (без использования встроенного метода
// repeat). Например, "ab", 3 -> "ababab".

function repeatString(str, count) {
    let answer = '';
    for (let i = 0; i < count; i++) {
        answer += str;
    }
    return answer;
}

console.log(repeatString('str', 3));