"use strict";

// import * as Enums from './utils/enums'

/**
 * Функция возвращает функцию генератор, которая при каждом вызови возвращает инкрементированное значение.
 * Начальное число, с которого начинается отсчет, и шаг задается при создании генератора.
 * Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
 * Генераторов можно создать сколько угодно.
 */
var sequence = function sequence() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var count = 0;
  return function () {
    return start + step * count++;
  };
};
/**
 * Функция возвращает сумму элементов массива с чётными/нечётными индексами.
 * Если even не указан то данная функция возвращает сумму всех элементов.
 */
var sum = function sum(array, even) {
  var sumEven = 0,
      sumOdd = 0,
      sumAll = 0;

  array.forEach(function (e, i) {
    i % 2 ? sumOdd += e : sumEven += e;
    sumAll += e;
  });

  switch (even) {
    case "even":
      return sumEven;break;
    case "odd":
      return sumOdd;break;
    default:
      return sumAll;break;
  }
};
/**;
 * Функция проверяет, есть ли в массиве группы элементов, каждый из которого на 1 больше предыдущего
 * Пример:
 *  Дан массив вида [9, 8, 1, 2, 3, 4, 5, 9, 8, 4, 5, 6, 7, 9]
 *  Результатом выполнения данной функции будет массив из двух групп [ [1, 2, 3, 4, 5], [4, 5, 6, 7] ]
 */
var getGroups = function getGroups(array) {
  var rezult = [],
      count = 0,
      flag = false,
      currentArray = [];

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] === 1) {
      currentArray.push(array[i]);
      flag = true;
    } else if (flag) {
      currentArray.push(array[i]);
      rezult[count] = currentArray;
      currentArray = [];
      count++;
      flag = false;
    }
  };

  if (array[array.length - 1] - array[array.length - 2] === 1) {
    currentArray.push(array[array.length - 1]);
  }
  if (currentArray.length !== 0) rezult[count] = currentArray;
  if (rezult.length == 1) rezult = rezult[0];

  return rezult;
};

/**
 * Если all равен true то данная функция делает заглавной первую букву каждого слова строки
 * в противном случае только первую букву строки. По умолчанию all равен false
 */

var toUpper = function toUpper(text) {
  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var arr = text.split(' ');

  if (all) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
  }

  return text.replace(text[0], text[0].toUpperCase());
};

/**
 * Функция проверяет валидность url адресов.
 * В качестве входящего аргумента может быть строка или массив из несколько url адресов
 * Если есть не валидные адреса то данная функция вызывает исключение (Exception) с перечислением этих адресов
 * Доменные зоны для проверки берем из Enums.domain_zone
 */
var checkUrl = function checkUrl(url) {

  var arrNoValid = [];
  var zone;
  var valid;

  if (typeof url == "string") url = url.split(" ");

  for (var i = 0; i < url.length; i++) {
    zone = url[i].split(/\./);
    valid = false;

    domain_zone.forEach(function (e) {
      if (zone[zone.length - 1] === e) valid = true;
    });

    if (!valid) arrNoValid.push(url[i]);
  }

  if (arrNoValid.length !== 0) throw new Error("Неправильный формат данных: " + arrNoValid);
};