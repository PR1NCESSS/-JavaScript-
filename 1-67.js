// №13. Создайте переменную num и присвойте ей значение 123. Выведите значение этой переменной на экран с помощью функции alert. 
let num = 123;
alert(num);

// #15. Создайте переменную a. Запишите в нее значение 10, выведите его на экран.Затем запишите в нее значение 20, выведите его на экран.
let a = 10;
alert(a);
a = 20;
alert(a);

// №17. Создайте переменную a. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции alert выведите на экран содержимое переменной a.
let a = 1 + 2 + 3;
alert(a);

// №18. Создайте переменную a со значением 10 и переменную b со значением 2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// Создайте переменную c со значением 10 и переменную d со значением 5. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
let c = 10;
let d = 5;
let result = c + d;
alert(result);

// Создайте переменную a со значением 1, переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму.
let a = 1;
let b = 2;
let c = 3;
alert(a + b + c);

// Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
let a = 10;
let b = 5;

let c = a - b;

let d = 7;

let result = c + d;

console.log(result);

// №23. Создайте переменную a со значением -100. Выведите это значение на экран.
let a = -100;
console.log(a);

// Создайте переменную a, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
let a = 42;
console.log(-a);

// №25 Найдите остаток от деления следующих переменных:
let a = 13;
let b = 5;
console.log(a % b);

// №26 Возведите число 2 в 10-ю степень. Выведите результат на экран.
console.log(2 ** 10);

// №28 Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран
let firstName = 'Timur';
let lastName = 'Makarov';
console.log(firstName, lastName)

// №29 Создайте переменную str и присвойте ей строку '!!!'. Выведите значение этой переменной на экран.
let str = '!!!';
console.log(str);

// Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.
let firstPart = 'java';
let secondPart = 'script';
console.log(firstPart + secondPart);

// Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции сложения строк выведите на экран строку 'hello world'.
let hello = 'hello';
let world = 'world';
console.log(hello + ' ' + world);

// №30 Запишите в переменную какую-нибудь строку. Выведите на экран длину вашей строки.
let myString = 'Пример строки';
console.log(myString.length);

// №31 Перепишите следующий код через вставку переменных:
let str1 = 'xxx';
let str2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;

// №32 Запишите в переменную str строку, состоящую из символов 'a', 'b', 'c', причем после каждого символа, кроме последнего, должен стоять перенос строки.
let str = `a
b
c`;
console.log(str);

// №34 Объявите переменную, не задавая ей значения. Выведите значение созданной переменной на экран.
let myVariable;
console.log(myVariable);

// №35 Значение null обозначает "ничего". К примеру, мы можем присвоить переменной такое значение в знак того, что там ничего не лежит:
let myNull = null;
console.log(myNull);

// №36 Присвойте переменной значение true. Выведите эту переменную на экран. Присвойте переменной значение false. Выведите эту переменную на экран.
let myVariable = true;
console.log(myVariable);

let myVariable = false;
console.log(myVariable);

// №37 Сделайте две строки. Перемножьте их друг на друга. Выведите результат умножения на экран.
let str1 = 'Hello ';
let str2 = 'World';
console.log(str1 * str2);

// №38 Поделите число 10 на 0. Выведите результат на экран. Поделите число -10 на 0. Выведите результат на экран.
let result = 10 / 0;
console.log(result);
let result = -10 / 0;
console.log(result);

// №39 Дана переменная. Выведите в консоль ее значение. Даны три переменные. Выведите в консоль их значения.
let arg = 5;
console.log(arg);

let int1=2, int2=4, int3=5;
console.log(int1, int2, int3);

// №42 Сделайте константу PI и с ее помощью вычислите длину какой-нибудь окружности по ее радиусу.
const PI = 3.14;
let R = 5;
let C = 2*PI*R;

// №44 Дана переменная a со значением '10' и переменная b со значением '20'. Сложите данные переменные как числа.
let a = '10';
let b = '20';

let result = Number(a) + Number(b);
console.log(result);

// №45 С помощью описанного приема с плюсом исправьте приведенный код так, чтобы в переменные a и b присваивалось число, а не строка, ну и результатом, соответственно, было не '23', а 5.
let a = '2';
let b = '3';
console.log(+a + +b);

// №47 Дана переменная со значением '5px' и переменная со значением '6px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
let a = '5px';
let b = '6px';

console.log(`${parseInt(a) + parseInt(b)}px`);

// Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
let a = '5.5px';
let b = '6.25px';

console.log(`${parseFloat(a) + parseFloat(b)}px`);

// №48 Даны две переменные с числами. Сложите значения этих переменных как строки и выведите результат на экран.
let num1 = 5;
let num2 = 10;

let result = String(num1) + String(num2);

console.log(result);

// №49 Дана переменная с числом. Найдите количество цифр в этом числе.
let num = 1337;
console.log(String(num).length);

// Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
let num1 = 12345;
let num2 = 6789;

let result = String(num1).length + String(num2).length;

console.log(result);

// №52 Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let myString = 'abcde';

console.log(myString[0]);
console.log(myString[2]);
console.log(myString[4]);

// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
let originalString = 'abcde';
let reversedString = originalString[4] + originalString[3] + originalString[2] + originalString[1] + originalString[0];

console.log(reversedString);

// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.
let str = 'abcde';
let num = 3;

console.log(str[num]);

// №54 Дана строка. Выведите на экран ее последний символ.
let myString = 'Пример строки';
console.log(myString[myString.length - 1]);

// Дана строка.Выведите на экран ее предпоследний символ.
let myString = 'Пример строки';
console.log(myString[myString.length - 2]);

// Дана строка.Выведите на экран ее предпредпоследний символ.
let myString = 'Пример строки';
console.log(myString[myString.length - 3]);

// №55 Дана строка '12345'.Найдите сумму цифр этой строки.
let myString = '12345';
let sum = Number(myString[0]) + Number(myString[1]) + Number(myString[2]) + Number(myString[3]) + Number(myString[4]);

console.log(sum);

// №56 Дано число 12345. Найдите сумму цифр этого числа.
let number = 12345;
let sum = Number(String(number)[0]) + Number(String(number)[1]) + Number(String(number)[2]) + Number(String(number)[3]) + Number(String(number)[4]);

console.log(sum);

// Дано число 12345. Найдите произведение цифр этого числа.
let number = 12345;
let product = Number(String(number)[0]) * Number(String(number)[1]) * Number(String(number)[2]) * Number(String(number)[3]) * Number(String(number)[4]);

console.log(product);

// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let number = 12345;
let reversedNumber = Number(String(number)[4] + String(number)[3] + String(number)[2] + String(number)[1] + String(number)[0]);

console.log(reversedNumber);

// №58 Переделайте этот код так, чтобы в нем использовались описанные сокращенные операции:
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

// №59. Переделайте этот код так, чтобы в нем операции инкремента и декремента:
let num = 10;
num++;
num++;
num--;
alert(num);

// №62 Спросите возраст пользователя с помощью функции prompt. Выведите с помощью alert введенный пользователем возраст.
let userAge = prompt('Введите ваш возраст:');
alert('Ваш возраст: ' + userAge);

// №63 Переделайте приведенный выше код так, чтобы суммировались числа, а не строки.
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

let sum = Number(num1) + Number(num2);
alert(sum);

// С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата.
let sideLength = prompt('Введите длину стороны квадрата:');
let area = Number(sideLength) * Number(sideLength);
alert('Площадь квадрата: ' + area);

// С помощью двух функций prompt спросите у пользователя стороны прямоугольника. Выведите на экран периметр введенного прямоугольника.
let length = prompt('Введите длину прямоугольника:');
let width = prompt('Введите ширину прямоугольника:');

let perimeter = 2 * (Number(length) + Number(width));
alert('Периметр прямоугольника: ' + perimeter);

// №64 Выведите в окно браузера какой-нибудь текст.
document.write('Привет, это какой-то текст!');

// Выведите в окно браузера какой-нибудь текст, сделав его курсивным.
document.write('<em>Привет, это курсивный текст!</em>');

// Дана переменная: let str = 'text'; Выведите текст из переменной в окно браузера так, чтобы он был курсивным.
let str = 'text';
document.write('<em>' + str + '</em>');

// Выведите в окно браузера столбец чисел от 1 до 5.
document.write('1<br>2<br>3<br>4<br>5<br>');

// №65 В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2));

let a = 1;
let b = 2;
let c = 3;
console.log(a + b + c);

let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

let num = 123;
console.log(String(num)[0]);

let a = 0;
console.log(++a);

let num = 123;
console.log(String(num).length);

let a = 24 * 60 * 60;
console.log(a);

let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

let a = '123';
let b = '456';
let s = Number(a) + Number(b);
console.log(s);

let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);

// №66 Найдите количество секунд в сутках.
console.log(60 * 60 * 24);

// Найдите количество секунд в 30 сутках.
console.log(60 * 60 * 24 * 30);

// Найдите количество секунд в году.
console.log(60 * 60 * 24 * 365);

// Найдите количество минут в сутках.
console.log(60 * 24);

// Найдите количество минут в году.
console.log(60 * 24 * 365);

// Найдите количество байт в мегабайте.
console.log(1024 * 1024); 

// Найдите количество байт в гигабайте.
console.log(1024 * 1024 * 1024);

// Найдите количество байт в 10 гигабайтах.
console.log(10 * 1024 * 1024 * 1024);

// Найдите количество байт в терабайте.
console.log(1024 * 1024 * 1024 * 1024);

// Найдите количество килобайт в терабайте.
console.log(1024 * 1024 * 1024);

// №67 Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
let r = 5; 
let s = Math.PI * (r ** 2);
console.log(s);

// Пусть дана переменная a со стороной квадрата. Найдите площадь квадрата и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
let a = 4; 
let s = a ** 2;
console.log(s);

// Пусть даны переменные a и b со сторонами прямоугольника. Найдите площадь прямоугольника и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
let a = 3;
let b = 5;
let s = a * b;
console.log(s);

// Пусть даны переменные a и b со сторонами прямоугольника. Найдите периметр прямоугольника и запишите его в переменную p. Выведите содержимое этой переменной на экран.
let a = 3;
let b = 5;
let p = 2 * (a + b);
console.log(p);

// Пусть дана переменная tc с температурой в градусах Цельсия. По соответствующей формуле выполните перевод этой температуры в градусы Фаренгейта.
let tc = 30;
let tf = (tc * 9 / 5) + 32;
console.log(tf);

// Пусть дана переменная tf с температурой в градусах Фаренгейта. По соответствующей формуле выполните перевод этой температуры в градусы Цельсия.
let tf = 86;
let tc = (tf - 32) * 5 / 9;
console.log(tc);
