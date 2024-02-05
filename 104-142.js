// №104 Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
let test1 = 10;
let test2 = 5;
if (test1 > test2) {
  console.log("Значение переменной test1 больше, чем значение переменной test2.");
} else if (test1 < test2) {
  console.log("Значение переменной test2 больше, чем значение переменной test1.");
} else {
  console.log("Значения переменных test1 и test2 равны.");
}

// Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test1 = 10;
let test2 = 5;
if (test1 == test2) {
  console.log("Значения переменных test1 и test2 равны.");
} else {
  console.log("Значения переменных test1 и test2 не равны.");
}

// №105 Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test1 = "hello";
let test2 = "world";
if (test1 == test2) {
  console.log("Значения переменных test1 и test2 равны.");
} else {
  console.log("Значения переменных test1 и test2 не равны.");
}

// №106 Даны переменные: let test1 = '123'; let test2 = 123; Проверьте, равны ли значения переменных и выведите соответствующее сообщение.
let test1 = '123';
let test2 = 123;
if (test1 == test2) {
  console.log("Значения переменных test1 и test2 равны.");
} else {
  console.log("Значения переменных test1 и test2 не равны.");
}

// №113 Проверьте, что переменная num больше нуля и меньше 5.
let num = 3;
if (num > 0 && num < 5) {
  console.log("Переменная num больше нуля и меньше 5.");
} else {
  console.log("Переменная num не соответствует условию.");
}

// Проверьте, что переменная num больше или равна 10 и меньше или равна 20.
let num = 15;
if (num >= 10 && num <= 20) {
  console.log("Переменная num больше или равна 10 и меньше или равна 20.");
} else {
  console.log("Переменная num не соответствует условию.");
}

// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let num1 = 0;
let num2 = 3;
if (num1 <= 1 && num2 >= 3) {
  console.log("Переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.");
} else {
  console.log("Условие не выполняется.");
}

// №120 Перепишите следующий код с использованием сокращенной формы: let test = true; if (test === true) {console.log('+++');else {console.log('---');}
let test = true;
if (test) {
  console.log('+++');
} else {
  console.log('---');
}

// №124 Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.
let test = 10;
if (test == 10) {
  console.log('yes');
}

// №127 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 15;
let decade;
if (day >= 1 && day <= 10) {
  decade = 'первую';
} else if (day >= 11 && day <= 20) {
  decade = 'вторую';
} else if (day >= 21 && day <= 31) {
  decade = 'третью';
}
console.log(`Число ${day} попадает в ${decade} декаду месяца.`);

// Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.
let day = 15;
let decade;
if (day >= 1 && day <= 31) {
  if (day >= 1 && day <= 10) {
    decade = 'первую';
  } else if (day >= 11 && day <= 20) {
    decade = 'вторую';
  } else if (day >= 21 && day <= 31) {
    decade = 'третью';
  }
  console.log(`Число ${day} попадает в ${decade} декаду месяца.`);
} else {
  console.log('Ошибка: неверное значение дня месяца.');
}

// №128 Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.
let num = 47;
let sum = 0;
if (num >= 10 && num <= 99) {
  let digit1 = Number(num.toString()[0])
  let digit2 = Number(num.toString()[1])
  sum = digit1 + digit2;
  if (sum <= 9) {
    console.log('Сумма цифр однозначна.');
  } else {
    console.log('Сумма цифр двузначна.');
  }
} else {
  console.log('Число не попадает в диапазон от 10 до 99.');
}

// №129 Перепишите код через switch-case}
switch (lang) {
  case 'ru':
    console.log('рус');
    break;
  case 'en':
    console.log('анг');
    break;
  case 'de':
    console.log('нем');
    break;
  default:
    console.log('язык не поддерживается');
    break;
}

// №132 Пусть даны следующие переменные: let a = 2 * (3 - 1); let b = 6 - 2; Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
let a = 2 * (3 - 1);
let b = 6 - 2;
if (a == b) {
  console.log('Значения переменных a и b равны');
} else {
  console.log('Значения переменных a и b не равны');
}

// Пусть даны следующие переменные: let a = 5 * (7 - 4); let b = 1 + 2 + 7; Используя оператор >, узнайте, больше ли переменная a, чем b.
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
if (a > b) {
  console.log('Переменная a больше, чем переменная b');
} else {
  console.log('Переменная a не больше, чем переменная b');
}

// Пусть даны следующие переменные: let a = 2 ** 4; let b = 4 ** 2; Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.
let a = 2 ** 4;
let b = 4 ** 2;
if (a != b) {
  console.log('Значения переменных a и b разные');
} else {
  console.log('Значения переменных a и b одинаковы');
}

// №133 Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let isAdult = confirm('Есть ли вам уже 18 лет?');
if (isAdult) {
  alert('Доступ разрешен. Добро пожаловать!');
} else {
  alert('Доступ запрещен. Извините!');
}

// №134 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код: let age = 17; if (age >= 18) {let adult = true;} else {let adult = false;}console.log(adult);
let age = 17;
let adult;
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}
console.log(adult);

/* №135 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код:
let age = 17;
let adult;
if (age >= 18) {
  let adult = true;
} else {
  let adult = false;
}
console.log(adult); */

let age = 17;
let adult;
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}
console.log(adult);

/* Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода.
Вот проблемный код:
let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {
	let adult = false;
}
console.log(adult); */

let age = 17;
let adult;
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}
console.log(adult);

/* Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
Вот проблемный код:
let age = 17;
let res;
if (age >= 18) {
	if (age <= 23) {
		let res = 'от 18 до 23';
	} else {
		let res = 'больше 23';
	}
} else {
	let res = 'меньше 18';
}
console.log(res); */ 

let age = 17;
let res;
if (age >= 18) {
    if (age <= 23) {
        res = 'от 18 до 23';
    } else {
        res = 'больше 23';
    }
} else {
    res = 'меньше 18';
}
console.log(res);

/* Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.
Вот проблемный код:
let age = 19;
let res;
if (age >= 18) {
	let res;
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res); */

let age = 19;
let res;
if (age >= 18) {
  // Убираем let здесь
  if (age <= 23) {
    res = 'от 18 до 23';
  } else {
    res = 'больше 23';
  }
} else {
  res = 'меньше 18';
}
console.log(res);

// №136 Пусть у нас есть переменная min, в которой хранится количество минут от 1 до 60, определите в какую треть часа попадает указанное количество минут.
let min = 35;
if (min <= 20) {
  console.log('Первая треть часа');
} else if (min <= 40) {
  console.log('Вторая треть часа');
} else {
  console.log('Третья треть часа');
}

// №137 В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
let arr = [1, 2, 3]; 
if (arr.length === 3) {
  let sum = arr[0] + arr[1] + arr[2];
  console.log('Сумма элементов массива:', sum);
}

// №138 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str = "apple"; // Пример строки
if (str[0] === 'a') {
  console.log('Строка начинается с символа "a"');
} else {
  console.log('Строка не начинается с символа "a"');
}

// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
let str = "apple"; // Пример строки
if (str[str.length-1] === 'x') {
  console.log('Строка заканчивается на символ "х"');
} else {
  console.log('Строка не заканчивается на символ "х"');
}

// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.
let str = "apple"; // Пример строки
if (str[0] === 'a' || str[0] === 'b') {
  console.log('Строка начинается с символа "a" или "b"');
} else {
  console.log('Строка не начинается с символа "a" или "b"');
}

// №139 Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let num = 1230;
if (num % 10 === 0) {
  console.log('Последняя цифра числа равна нулю');
} else {
  console.log('Последняя цифра числа не равна нулю');
}

// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
let num = 123456;
let lastDigit = num % 10;
if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

// №140 Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.
let number = 17;
if (number % 2 === 0) {
  console.log(number + " - четное число");
} else {
  console.log(number + " - нечетное число");
}

// Дано число. Проверьте, что оно делится на 3.
let number = 12; 
if (number % 3 === 0) {
  console.log(number + " делится на 3 без остатка");
} else {
  console.log(number + " не делится на 3 без остатка");
}

// №141 В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.
// 2
let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
  console.log('+++');
} else {
  console.log('---');
}
// 3
let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
  console.log('+++');
} else {
  console.log('---');
}
// 4
let num = 123;
if (num.toString()[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}
// 5
let num = 123;
if (String(num)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}
// 6
let num = 123;
if (Number(String(num)[0]) === 1) {
  console.log('+++');
} else {
  console.log('---');
}
// 7
let num = 123;
let first = String(num)[0];
if (first === '1') {
  console.log('+++');
} else {
  console.log('---');
}
// 8
num = 12;
if (num.toString().length === 2) {
  console.log('+++');
} else {
  console.log('---');
}
// 9
let num = 12;
let str = String(num);
if (str.length === 2) {
  console.log('+++');
} else {
  console.log('---');
}
// 10
let num = 12;
if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}
// 11
let num = 12;
if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}
// 12
let num = 12;
if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

// 13
let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
if (sum1 == sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}

// №142 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 5;
if (month >= 3 && month <= 5){
  console.log(`${month} месяц это весна`)
}
else if (5 <= month <= 8){
  console.log(`${month} месяц это лето`)
}
else if (9 <= month <= 11) {
  console.log(`${month} месяц это осень`)
}
else if (month === 1 || month === 2 || month === 31){
  console.log(`${month} месяц это зима`)
}
else{
  console.log("Нет месяца с таким номером")
}

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = 'abcde';
let first = str[0] === 'a' ? 'да' : 'нет';
console.log(first)

// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = 42345;
let str = num.toString();
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
  console.log('да');
}
else {
  console.log('нет');
}

// Дано трехзначное число. Найдите сумму цифр этого числа.
let num = 123;
console.log(Number(num.toString()[0]) + Number(num.toString()[1]) + Number(num.toString()[2]))

// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = 123456;
let str = num.toString(); // берем в кавычки, чтобы обращаться к цифрам
let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (sum1 == sum2) {
  console.log('да');
} else {
  console.log('нет');
}











