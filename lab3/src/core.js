/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
  return (n | 0) === n;
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
  let arr = [];
  for (let i = 2; i < 21; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }

  return sum;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
  if (n === 0) {
    return 0;
  }

  return n + recSumTo(n - 1);
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
  let fact = 1;
  for (let i = 1; i < n + 1; i++) {
    fact *= i;
  }

  return fact;
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  let f1 = 0;
  let f2 = 1;
  for (let i = 1; i < n; i++) {
    let tmp = f2;
    f2 += f1;
    f1 = tmp;
  }

  return f2;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
  let sum = initialValue;
  return function (x) {
    if (typeof operatorFn !== "function") {
      return initialValue;
    }
    sum = operatorFn(sum, x);

    return sum;
  };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
  let current = start - step;

  return function () {
    current += step;

    return current;
  };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
  if (firstObject === secondObject) {
    return true;
  }

  // Проверка на null и тип данных
  if (
    firstObject == null ||
    secondObject == null ||
    typeof firstObject !== "object" ||
    typeof secondObject !== "object"
  ) {
    return Number.isNaN(firstObject) && Number.isNaN(secondObject);
  }

  const keysFirst = Object.keys(firstObject);
  const keysSecond = Object.keys(secondObject);

  if (keysFirst.length !== keysSecond.length) {
    return false;
  }

  for (let key of keysFirst) {
    if (!deepEqual(firstObject[key], secondObject[key])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isInteger,
  even,
  sumTo,
  recSumTo,
  factorial,
  isBinary,
  fibonacci,
  getOperationFn,
  sequence,
  deepEqual,
};
