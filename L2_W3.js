'use strict';

let a = +prompt("Введите первое целое число");
let b = +prompt("Введите второе целое число");

    if (a >= 0 && b >= 0){
        let result = a - b;
        alert("Разница чисел составляет " + result);
    }

    if (a < 0 && b < 0){
        result = a * b;
        alert("Произведние чисел равно: " + result);
    }

    /* if (Math.sign(a) ? Math.sign(b)){
        result = a + b;                     // Запутался в решении, понял что Math.sign определяет знак числа,
                                            // а как реализовать, не сооброжу.
        alert("Суммы чисел равна: " + result);
    } */