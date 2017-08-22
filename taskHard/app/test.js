describe('Функция sequence(startingValue, step)', () => {
    var startingValue = 10,
        step = 3;
    var generator = sequence;

    it("должна возвращать другую функцию", () => {
        assert.isFunction(generator());
    });

    describe("Эта функция", () => {
        beforeEach(() => {
            generator = sequence(startingValue, step);
        });
        it('при первом вызове должна возвращать начальное значение', () => {
           	assert.equal(generator(), startingValue);
        });
        it('при последующих вызовах должна возвращать значение, увеличенное на величину шага', () => {
            generator();
           	assert.equal(generator(), startingValue + step);
            assert.equal(generator(), startingValue + step * 2);
        });
    });

    describe("Её параметры", () => {
        var generator2;

        beforeEach(() => {
            generator2 = sequence();
        });

        it("должны быть необязательными", () => {
            assert.isDefined(generator2());
        });

        it("начальное значение должно быть равно 0 по умолчанию", () => {

            assert.equal(generator2(), 0);
        });

        it("шаг должен быть равен 1 по умолчанию", () => {
            var g = sequence(4);

            assert.equal(g(), 4);
            assert.equal(g(), 5);
            assert.equal(generator2(), 0);
            assert.equal(generator2(), 1);
            assert.equal(generator2(), 2);
        });
    });

    it("можно создать любое количество независимых генераторов", () => {
        var generator = sequence(1, 5);
        var generator2 = sequence(1, 5);

        assert.isDefined(generator());
        assert.isDefined(generator2());

        assert(generator() == generator2())

        generator();
        assert.notEqual(generator(),generator2())
    });

});

describe('Функция sum = (array, even)', () => {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        even = "even";

    var generator = sum;

    it("должна возвращать число", () => {
        assert.isNumber(generator(array, even));
    });


    describe("Её второй параметр", () => {
    	var generator2;

        beforeEach(() => {
            generator2 = sum;
        });

        it("должен быть необязательными", () => {
            assert.isDefined(generator2(array));
        });
    });

    it("Функция возвращает нужное значение", () => {
        var generator = sum([1,3,5,7,9], "even");
        var generator2 = sum([1,3,5,7,9], "odd");
        var generator3 = sum([1,3,5,7,9]);
        var generator4 = sum([1,2,3,4,5,6,7,8,9,10], "even");
        var generator5 = sum([1,2,3,4,5,6,7,8,9,10], "odd");
        var generator6 = sum([1,2,3,4,5,6,7,8,9,10]);

        assert.equal(generator, 15);
        assert.equal(generator2, 10);
        assert.equal(generator3, 25);
        assert.equal(generator4, 25);
        assert.equal(generator5, 30);
        assert.equal(generator6, 55);
    });

});

describe('Функция getGroups(array)', () => {
    var array = [9, 8, 1, 2, 3, 8, 4, 5];

    var generator = getGroups;

    it("должна возвращать массив", () => {
        assert.isArray(generator(array));
    });

    it("Функция возвращает нужное значение", () => {
        var generator = getGroups([9, 8, 1, 2, 3, 4, 5, 9, 8, 4, 5, 6, 7, 9]);
        var generator2 = getGroups([9, 8, 1, 2, 4, 5, 9, 8, 4, 5, 8, 9]);
        var generator3 = getGroups([9, 8]);
        var generator4 = getGroups([1, 2, 3, 4, 5, 6, 7, 9]);
        var generator5 = getGroups([1, 2, 3, 4, 5, 6, 7]);

        var generatorAns = [[1, 2, 3, 4, 5], [4, 5, 6, 7]];

        // assert.equal(generator, generatorAns);
        // assert.equal(generator2, [[1, 2], [4, 5], [4, 5], [8, 9]]);
        // assert.equal(generator3, []);
        // assert.equal(generator4, [1, 2, 3, 4, 5, 6, 7]);
        // assert.equal(generator5, [1, 2, 3, 4, 5, 6, 7]);
    });

});

describe('Функция toUpper(text, all)', () => {
    var text = "начальная строка",
        all = false;

    var generator = toUpper;

    it("должна возвращать строку", () => {
        assert.isString(generator(text, all));
    });

    describe("Её второй параметр", () => {
    	var generator2;
        beforeEach(() => {
            generator2 = toUpper;
        });

        it("должен быть необязательными", () => {
            assert.isDefined(generator2(text));
        });
    });

    it("Функция возвращает нужное значение", () => {
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


describe('Функция checkUrl(url)', () => {
    var url = "www.domain.ru",
    	url2 = ["www.domain.ru", "www.domain.ru", "www.domain.ru"];

    var generator = checkUrl;

    describe("Входной параметр", () => {
    	var generator2;
        beforeEach(() => {
            generator2 = checkUrl;
        });

        it("строка", () => {
            assert.isUndefined(generator2(url));
        });
        it("массив с несколькими URL", () => {
            assert.isUndefined(generator2(url2));
        });
    });
    it("Функция генерирует ничего не возвращает, если домен валидный", () => {
    	assert.isUndefined(generator(url));
    	assert.isUndefined(generator(url2));
    });

    // it("Функция генерирует исключение со списком не валидных доменов", () => {
    // 	assert.throws(generator("www.domain.lu"));
    // 	assert.throws(generator(["www.domain.ru1", "www.domain.ru", "www.domain.ru"]));
    // 	assert.throws(generator(["www.domain.ru2", "www.domain.ru3", "www.domain.ru"]));
    // });

});