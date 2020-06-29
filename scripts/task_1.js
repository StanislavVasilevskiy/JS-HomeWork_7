	// Задание № 1
console.log("Задание № 1");
console.log("");

// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.

let Car = function() {
	this.info = function() {
		this.model = prompt("Введите марку машины");
		this.number = prompt("Введите номер машины");
		this.engine = prompt("Двигатель вкл или выкл?");
		this.transmission = prompt("Выберите передачу (вперед, назад, нейтральная)");
		this.speed = +prompt("Введите скорость, с которой вы едете в машине (км/ч)");
		this.time = +prompt("Введите время, потраченное на дорогу (в минутах)");

		this.calculation();
	};

	this.calculation = function() {
		switch(this.engine) {
			case "вкл":
				switch(this.transmission) {
					case "вперед":
						if (this.speed >= 0 && this.speed <= 200) {
							this.result = (this.speed * this.time) / 60;
							alert("Вы все ввели верно, перейдите в консоль.");
						} else if (this.speed > 200 && this.speed <= 400) {
							this.result = (this.speed * this.time) / 60;
							alert("О черт, это Брайн!");
							alert("Не забудь посмотреть в консоль.");
						} else {
							this.result = 0;
							alert("Не выдумывай, твой звездолет так не умеет!");
						};
					break;

					case "назад":
						if (this.speed >= 0 && this.speed <= 60) {
							this.result = (this.speed * this.time) / 60;
							alert("Вы все ввели верно, перейдите в консоль.");
						} else {
							this.result = 0;
							alert("Ну в самом деле, мы же не снимаем индийский боевик! Все фигня, давай по новой!");
						};
					break;

					default:
						this.result = 0;
						alert("С этим бы справилась даже моя бабушка!");
				};
			break;

			default:
				this.result = 0;
				alert("В следующий раз не забудь включить двигатель!");
		};

		this.distance();
	};

	this.distance = function() {
		console.log("Вы проедете " + this.result + " киллометров на машине марки " + this.model + " с номерным знаком " + this.number + ".")
	};
};

let car = new Car();
car.info();