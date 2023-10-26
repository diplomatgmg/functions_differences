
keywordFunc(1, 2); // Вызовется
arrowFunc(1, 2); // Ошибка


// В первом вызове функции sum(1, 2), работает из-за того,
// что JavaScript поддерживает поднятие переменных (hoisting).
// Когда интерпретатор JavaScript выполняет код,
// он сначала сканирует его для объявлений переменных и функций, и затем исполняет код.

function keywordFunc(a, b) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }. Стрелочная фукнция имеет argiments
}

const arrowFunc = (a, b) => {
  console.log(arguments); // undefined. Стрелочная фукнция не имеет arguments
};

// arguments - это встроенный объект внутри именованных функци,
// который хранит в себе все переденные в функцию атрибуты

keywordFunc(1, 2); // [Arguments] { '0': 1, '1': 2 }
arrowFunc(1, 2); // Ошибка: arguments не определено. Т.е. undefined


// Также, стрелочный функции удобнее писать для коротких записей, например:

const multiply = (a, b) => a * b;

function multiply2(a, b) {
  return a * b;
}

// Эти две записи одинаковые, но первая короче.


// Дальше идет немного из ООП, а именно слово this

const person = {
  name: 'Кирилл',
  greet: function () {
    console.log(`Привет, ${this.name}!`);
  }
};

person.greet(); // Привет, Кирилл!

const person2 = {
  name: 'Кирилл',
  greet: () => {
    console.log(`Привет, ${this.name}!`);
  }
};

person2.greet(); // TypeError: Cannot read properties of undefined (reading 'name')
// Т.е. у стрелочной функции нет оператора this

