"use strict";

describe('Функция sequence(startingValue, step)', function () {
    var startingValue = 10,
        step = 3;
    var generator = sequence;

    it("должна возвращать другую функцию", function () {
        assert.isFunction(generator());
    });

    describe("Эта функция", function () {
        beforeEach(function () {
            generator = sequence(startingValue, step);
        });
        it('при первом вызове должна возвращать начальное значение', function () {
            assert.equal(generator(), startingValue);
        });
        it('при последующих вызовах должна возвращать значение, увеличенное на величину шага', function () {
            generator();
            assert.equal(generator(), startingValue + step);
            assert.equal(generator(), startingValue + step * 2);
        });
    });

    describe("Её параметры", function () {
        var generator2;

        beforeEach(function () {
            generator2 = sequence();
        });

        it("должны быть необязательными", function () {
            assert.isDefined(generator2());
        });

        it("начальное значение должно быть равно 0 по умолчанию", function () {

            assert.equal(generator2(), 0);
        });

        it("шаг должен быть равен 1 по умолчанию", function () {
            var g = sequence(4);

            assert.equal(g(), 4);
            assert.equal(g(), 5);
            assert.equal(generator2(), 0);
            assert.equal(generator2(), 1);
            assert.equal(generator2(), 2);
        });
    });

    it("можно создать любое количество независимых генераторов", function () {
        var generator = sequence(1, 5);
        var generator2 = sequence(1, 5);

        assert.isDefined(generator());
        assert.isDefined(generator2());

        assert(generator() == generator2());

        generator();
        assert.notEqual(generator(), generator2());
    });
});

describe('Функция sum = (array, even)', function () {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        even = "even";

    var generator = sum;

    it("должна возвращать число", function () {
        assert.isNumber(generator(array, even));
    });

    describe("Её второй параметр", function () {
        var generator2;

        beforeEach(function () {
            generator2 = sum;
        });

        it("должен быть необязательными", function () {
            assert.isDefined(generator2(array));
        });
    });

    it("Функция возвращает нужное значение", function () {
        var generator = sum([1, 3, 5, 7, 9], "even");
        var generator2 = sum([1, 3, 5, 7, 9], "odd");
        var generator3 = sum([1, 3, 5, 7, 9]);
        var generator4 = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "even");
        var generator5 = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd");
        var generator6 = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        assert.equal(generator, 15);
        assert.equal(generator2, 10);
        assert.equal(generator3, 25);
        assert.equal(generator4, 25);
        assert.equal(generator5, 30);
        assert.equal(generator6, 55);
    });
});

describe('Функция getGroups(array)', function () {
    var array = [9, 8, 1, 2, 3, 8, 4, 5];

    var generator = getGroups;

    it("должна возвращать массив", function () {
        assert.isArray(generator(array));
    });

    it("Функция возвращает нужное значение", function () {
        var generator = getGroups([9, 8, 1, 2, 3, 4, 5, 9, 8, 4, 5, 6, 7, 9]);
        var generator2 = getGroups([9, 8, 1, 2, 4, 5, 9, 8, 4, 5, 8, 9]);
        var generator3 = getGroups([9, 8]);
        var generator4 = getGroups([1, 2, 3, 4, 5, 6, 7, 9]);
        var generator5 = getGroups([1, 2, 3, 4, 5, 6, 7]);

        assert.deepEqual(generator, [[1, 2, 3, 4, 5], [4, 5, 6, 7]]);
        assert.deepEqual(generator2, [[1, 2], [4, 5], [4, 5], [8, 9]]);
        assert.deepEqual(generator3, []);
        assert.deepEqual(generator4, [1, 2, 3, 4, 5, 6, 7]);
        assert.deepEqual(generator5, [1, 2, 3, 4, 5, 6, 7]);
    });
});

describe('Функция toUpper(text, all)', function () {
    var text = "начальная строка",
        all = false;

    var generator = toUpper;

    it("должна возвращать строку", function () {
        assert.isString(generator(text, all));
    });

    describe("Её второй параметр", function () {
        var generator2;
        beforeEach(function () {
            generator2 = toUpper;
        });

        it("должен быть необязательными", function () {
            assert.isDefined(generator2(text));
        });
    });

    it("Функция возвращает нужное значение", function () {
        var generator = toUpper('отличный текст для теста', false);
        var generator2 = toUpper('отличный текст для теста', true);
        var generator3 = toUpper('отличный текст для теста');
        var generator4 = toUpper('начальная строка', false);
        var generator5 = toUpper('начальная строка', true);
        var generator6 = toUpper('начальная строка');

        assert.equal(generator, 'Отличный текст для теста');
        assert.equal(generator2, 'Отличный Текст Для Теста');
        assert.equal(generator3, 'Отличный текст для теста');
        assert.equal(generator4, 'Начальная строка');
        assert.equal(generator5, 'Начальная Строка');
        assert.equal(generator6, 'Начальная строка');
    });
});

describe('Функция checkUrl(url)', function () {
    var url = "www.domain.ru",
        url2 = ["www.domain.ru", "www.domain.ru", "www.domain.ru"];

    var generator = checkUrl;

    describe("Входной параметр", function () {
        var generator2;
        beforeEach(function () {
            generator2 = checkUrl;
        });

        it("строка", function () {
            assert.isUndefined(generator2(url));
        });
        it("массив с несколькими URL", function () {
            assert.isUndefined(generator2(url2));
        });
    });
    it("Функция генерирует ничего не возвращает, если домен валидный", function () {
        assert.isUndefined(generator(url));
        assert.isUndefined(generator(url2));
    });

    it("Функция генерирует исключение со списком не валидных доменов", function () {

        assert.throws(function () {
            generator("www.domain.lu");
        }, Error, 'Неправильный формат данных: www.domain.lu');
        assert.throws(function () {
            generator(["www.domain.ru1", "www.domain.ru", "www.domain.ru"]);
        }, Error, 'Неправильный формат данных: www.domain.ru1');
        assert.throws(function () {
            generator(["www.domain.ru2", "www.domain.ru3", "www.domain.ru"]);
        }, Error, 'Неправильный формат данных: www.domain.ru2,www.domain.ru3');
    });
});