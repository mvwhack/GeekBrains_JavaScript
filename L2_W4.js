'use strict';

/**
 * Функция складывает заданные числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b){
        return a + b;
}

let a = parseInt(prompt("Введите первое число."));
let b = parseInt(prompt("Введите второе число."));
let result = sum(a, b);
    alert("Сумма чисел ровна:" + result );

/**
 * Функция вычитает разницу заданных чисел.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b){
        return a - b;
}

    a = parseInt(prompt("Введите первое число."));
    b = parseInt(prompt("Введите второе число."));
    result = subtraction(a, b);
    alert("Разница чисел равна: " + result );

/**
 * Функция производит деление заданных чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b){
    return a / b;
}

    a = parseInt(prompt("Введите первое число."));
    b = parseInt(prompt("Введите второе число."));
    result = division(a, b);
    alert("Результат деления: " + result );

/**
 * Функция производит умножение заданных чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b){
    return a * b;
}

     a = parseInt(prompt("Введите первое число."));
     b = parseInt(prompt("Введите второе число."));
     result = multiplication(a, b);
     alert("Произведение чисел равно: " + result );