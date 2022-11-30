// Строгий режим
"use strict"

// Основні методи рядків
// Довжина рядка length
/*
let someString = `Привіт! Як справи?`;
console.log(someString.length);
*/

// Рядок це масив []
/*
let someString = `Привіт! Як справи?`;
console.log(someString[0]);
*/

// Регістр toUpperCase(), toLowerCase()
/*
let someString = `Привіт! Як справи?`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
*/

// Пошук - методы includes, startsWith, endsWith
/*
let someString = `Привіт! Як справи?`;
let someStringLower = someString.toLowerCase();
// пошук в усьому рядку
console.log(someStringLower.includes('рив'));
// Починається з
console.log(someString.startsWith('Прив'));
// Закінчується на
console.log(someString.endsWith('?'));
*/

// Отримання частини рядка, метод slice(start, end)
/*
let someString = `Привіт! Як справи?`;
let someNewString = someString.slice(2, 6);
console.log(someNewString);
*/

// Пошук та заміна replace
/*
let someString = `#Привіт! Як справи?`;
someString = someString.replace('#', '');
console.log(someString);
Детальніше: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/

// Основні методи чисел

// Math.floor - Округлення в меньшу сторону
/*
let someNotRoundNum = 25.9;
console.log(Math.floor(someNotRoundNum));
*/

// Math.ceil - Округлення в більшу сторону
/*
let someNotRoundNum = 25.001;
console.log(Math.ceil(someNotRoundNum));
*/

// Math.round - Округлення до ближнього цілого
/*
let someNotRoundNum = 25.4;
console.log(Math.round(someNotRoundNum));
*/

// Math.abs - Модуль числа
/*
let someNotRoundNum = -25.9;
console.log(Math.abs(someNotRoundNum));
*/

// Math.random()
/*
console.log(Math.random());
*/

// Math.max(a, b, c...) / Math.min(a, b, c...)
/*
console.log(Math.max(1, 2, -3));
console.log(Math.min(1, 2, -3));

let numMax = Math.max(1, 2, -3);
console.log(numMax);
*/

// parseInt и parseFloat
/*
let someVar = `35.5px`;
let someNum = parseFloat(someVar);
console.log(someNum);
*/

// Основні оператори
// Майже всі оператори автоматично
// змінюють тип даних на number
/*
let varOne = "10";
let varTwo = "3";
*/
// Оператор мінус
/*
let varSumm = varOne - varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/
// Оператор ділення
/*
let varSumm = varOne / varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/
// Оператор множення
/*
let varSumm = varOne * varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Взяття залишку від ділення
/*
let varSumm = varOne % varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Оператор додавання (!!! Тільки цей оператор не змінює тип даних)
/*
let varOne = "10";
let varTwo = 3;
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Унарний оператор додавання
// Використовується тільки з
// одним операндом (учасником обчислення)
/*
let someNum = "5";
let result = +someNum;
console.log(result);
*/
/*
let varOne = "10";
let varTwo = "3";
let varSumm = +varOne + +varTwo;
console.log(varSumm);
*/

// Інкремент / декремент
// Працює лише зі змінними
/*
let someNumOne = 5;
let someNumTwo = 3;
console.log(++someNumOne);
console.log(--someNumTwo);
*/

// Приорітетність операторів
/*
let results = 2 + 3 * 10 / +"5";
*/
/*
let num = 5;
let results = 2 + 3 * 10 / ++num;
*/
/*
console.log(results);
*/

// Оператори порівняння
// < > == !=
// Раджу === !==
/*
let result = 6 === "6";
console.log(result);
*/
/*
// Оператор присвоєння =
let someNum = 5;
*/

// Логічні оператори
// ! || &&
// Оператор "ні" !
/*
let result = !"";
console.log(Boolean(result));
*/

// Оператор "або" ||
/*
let result = "" || 0;
console.log(result);
*/

// Оператор "та" &&
/*
let result = 1 && 5;
console.log(Boolean(result));
console.log(result);
*/

// Умовне вітвлення
/*
// Синтаксис
if( умова ){
	// Код виконоється
	// тільки якщо умова вертає true
}else if( умова #2 ){
	// Код виконоється
	// тільки якщо умова #2 вертає true
}else{
	// Код виконоється
	// тільки якщо усі умови вертають false
}
*/
/*
let varOne = 10;
let varTwo = 10;

if (varOne > varTwo) {
	let result = varOne + varTwo;
	console.log(result);
} else if (varOne === 10) {
	console.log(`varOne = 10`);
} else {
	console.log('else');
}
console.log('..продовження коду');
// ...продовження коду
*/
/*
let varOne = "1";
let varTwo = 2;
let varThree = 3;
let varFour = 4;
*/
/*
if (varOne > 3 || varTwo === 2 && varThree < 4 || varFour > 6) {
	// Код виконоється
	// тільки якщо умова вертає true
	console.log('Умова is true');
}
*/
/*
if (varOne.length === 1) {
	console.log('True');
}
*/

// Оператор умови ?

// Синтаксис
// умова ? значення якщо умова true : значення якщо умова false

/*
let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";

if (10 > 5) {
	let someVar = "10 більше 5";
} else {
	let someVar = "10 меньше 5";
}
*/

// Цикл For
// let someString = "Привіт! Як справи?";
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
*/

// Синтаксис
/*
for(початок; умова закінчення; крок){
	// код виконується
	// на кожному колі циклу
}
*/
/*
console.log(`К-сть символів: ${someString.length}`);

for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i]);
}
*/

let x;
//Додавання + 

x = 10 + 11;
console.log('Результат додавання: ${x}');

//Віднімання - 

x = 20 - 13;
console.log('Результат віднімання: ${x}');

//Множення *

x = 5 * 4;
console.log('Результат множення: ${x}');

//Діллення % 

x = 20 / 2;
console.log('Результат ділення: ${x}');


//Взята остатка від ділення %

x = 11 % 3;
console.log('Результат взятта остатка від ділення: ${x}');
//Перевірка 11=3*3(неповне частне від ділення)+2(остаток)

//Возведення в степені **.

x = 8 ** 4;
console.log('Результат возведення в степені: ${x}');
//Часто 8 умноження на собі 3 раза 8*8*8 =  512.

//Примене оператора додавання в строка 
let resultOne = "Фрилансер" + " " + "по" + " " + "життю";
console.log(resultOne);

//Робота наступну операторов
let resultTwo = "35" - 5;
console.log(resultTwo);
console.log(typeof resultTwo);


// Скобки
let resultThree = (5 - 2) + 6;
console.log(resultThree);


//Оператор присвайвання

let k = 4 + 3;
let m = 6;

let result = 20 - (k = m + 2);
console.log("Результат в скобках: " + k);
console.log("Общий результат: " + result);

//Інкремент ++
let addUser = 10;
addUser++;
console.log(addUser);


//Декремент --
let removeUser = 10;
removeUser--;
console.log(removeUser);

//Оперативне сравнения тип дані значенням true або false

console.log(16 > 12);
console.log(14 < 20);
console.log(60 == 40);
console.log(31 != 32);

//Null u undefined
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//Буліви значенні
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || true);
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && true);


//Варіант №1
console.log('35' + - '22');
//Вeрнет 13

//Варіант №2
console.log('35' * '22');
//Вeрнет 770

//Варіант №3
console.log('558' * '22++');
//Вeрнет true

//Варіант №4
let usersConter = 20;
let newUsers = usersConter++;
console.log(newUsers);
//Вeрнет 1

//Варіант №5
console.log(!false && 11 || 18 && !'');
//Вeрнет 18

//Варіант №6
let name = 0;
console.log(name ?? "Без імені");


//Блоки ELSE u ELSE IF
let number = 10;

if (number > 2) {
	
} else {
	console.log('Услові не виконано:(');
}

//Условий оператор "?"

/*
let messageEnd;

if (5 > 1){
	messageEnd = ", Мітя!";
} else {
	messageEnd = ", Катя!";
}
*/

let messageEnd = (5 > 2) ? ", Мітя!" : ", Катя!";

if (5 > 10){
	console.log("Привіт, Мітя!")
} else{
	console.log("Привіт, Катя!");
}

//Варіант №1
if (1 === "1"){
	console.log('Істина!');
} else {
	console.log('Ложь!');
}

//Варіант №2
if (5 === "5") {
	console.log('Істина!');
} else {
	console.log('Ложь!');
}

//Варіант №3
let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Ложь!';
console.log (message);

//Варіант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Істина!');
}



//Метки

firstFor: for (let num = 0 ; num < 5; num++){
	for (let size = 0; size < 10; size++) {
		if (size == 5){
			break firstFor;
		}
		console.log(size);
	}
}

firstFor: for (let num = 0; num < 3; num++) {
	for (let size = 0; size < 6; size++) {
		if (size == 3) {
			continue firstFor;
		}
		console.log(size);
	}
}

// Задача №1
let numr = 1;
while (numr < 6) {
	console.log(numr);
	numr++;
}

// Задача №2
let num = 8;
while (num){
	console.log(num);
	num--;
}

// Задача №3

let nmm = 0; 
while (nmm < 3) { 
	console.log(`Число: ${nmm}`); 
	nmm++; 
} 


// Задача №4
for (let num = 0; num < 2; num++){
	for(let size = 0; size < 3; size++){
		console.log(size);
	}
}


// Число
let someNum = 585;
console.log(someNum);

//Десяткове число
let someNums = 58.5;
console.log(someNums);

//Метод toString

console.log(0xFF);
console.log(0b11111111);

let npm = 255;
console.log(npm.toString(17));
console.log(npm.toString(3));
console.log(npm.toString(5));

//Math.floor

let numOne = Math.floor(6.5);
let numTwo = Math.floor(3.3);
let numThree = Math.floor(-3.3);

console.log(numOne);
console.log(numTwo);
console.log(numThree);


// Проблеми неточні вичеслені
let numOna = Math.round(2.107 * 100) / 100;
console.log(numOna);

let numTwa = 15.45;
console.log(numTwa.toFixed(1));

//Провірка isNaN

console.log(Number(25 + "Hello!"));

console.log(isNaN(25 + "Hello!"));


//Провірка isFinite

console.log(isFinite("25"));
console.log(isFinite("Привіт"));
console.log(isFinite(10 / 0));


//parseInt u parseFloat

let valueOne = parseInt("160.48px");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("160.48px");
console.log(valueTwo);
console.log(typeof valueTwo);


// Задача №1
let numFour = Math.round(1.005 * 100) / 100;
console.log(numFour);


// Задача №2
let value = parseFloat("135.58px");
console.log(value);




// Задача №3
let valueFive = 58 + "Фрілансер";
 if (valueFive == NaN); 
{
   console.log(isNaN(valueFive));
 } 


 // Задача №4
let numbOnq = 10; 
let numbTwl = 58; 
let numbThraa = 39; 
let numbFoir = -150; 
let numbFivy = 0;
console.log(Math.max(numbOnq, numbTwl, numbThraa, numbFoir, numbFivy)); 


// Задача №5
let nqm = Math.floor(58.858); 
console.log(nqm); 


// Многостроні записи.

let text = 'Привіт! Ви на каналі Фрілансер по життю!';
console.log(text)

let someString ="160";
let someNumi = 160;
console.log(someString);
console.log(typeof someString);
console.log(someNumi);
console.log(typeof someNumi);

console.log(someString + someNumi);

// Перевод строки \n

let textOne = "Привіт!\nВи на каналі\nФрілансер по життю!";
console.log(textOne);


let textFiva = "Привіт!\n\tВи на каналі\n\t\tФрілансер по життю!";
console.log(textFiva);


//Длина строки.Свойство Length

let textSix ="Привіт!";
console.log(textSix.length);

//Получення символи строки

let tect = "Привіт";
let firstSymbol = tect[0];
let lasttSymbol = tect[tect.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);

for (const char of tect) {
	console.log(char);
}


//Ізменне регистора 

let tert = "Життя!";
console.log(tert.toUpperCase());
console.log(tert.toLowerCase());


// Іконки, символи UTF-16 \uКОД, UTF-32  \u{КОД}

let tewt = "Живa, й робота в свободне життя \u00A9 \u{1F60D}";
console.log(tewt);

// Методи includes, starsWith, endsWith

let tort = "Привіт!";
console.log(tort.includes('рив'));
console.log(tort.includes('рив', 3));

console.log(tort.startsWith('рив'));
console.log(tort.endsWith('!'));

let twit = "Робота";
console.log(twit.slice(1,2));
console.log(twit.slice(-2, -1));
console.log(twit.slice(1));

// Задача №1 
let fls ="фрілансер";
let taqr ='Привіт! Я ${fls}';
console.log(taqr);

// Задача №2

let terc = 'фрілансер';


// Задача №3

let tied = 123 + '456';
console.log(tied);


// Задача №4

let taxt = 'фрілансер';


// Задача №5

let tawt = 'фрілансер';



// Задача №6

let tuqy = 'фрілансер';
console.log(tuqy.includes('лан', 4))