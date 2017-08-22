class Animal {
	constructor (name = Animal.getDefaultName()) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	static getDefaultName() {
		return "Bobik"
	}
}
class Dog extends Animal {
	constructor(name){
		super(name);
	}

	bark() {
		return `Dog ${this.name} is barking`
	}
}

var dog = new Dog ('Aban');