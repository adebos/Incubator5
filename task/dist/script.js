"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
	function Animal() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Animal.getDefaultName();

		_classCallCheck(this, Animal);

		this.name = name;
	}

	_createClass(Animal, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}], [{
		key: "getDefaultName",
		value: function getDefaultName() {
			return "Bobik";
		}
	}]);

	return Animal;
}();

var Dog = function (_Animal) {
	_inherits(Dog, _Animal);

	function Dog(name) {
		_classCallCheck(this, Dog);

		return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name));
	}

	_createClass(Dog, [{
		key: "bark",
		value: function bark() {
			return "Dog " + this.name + " is barking";
		}
	}]);

	return Dog;
}(Animal);

var dog = new Dog('Aban');