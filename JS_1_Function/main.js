// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function Spr(a,b) {
    return a*b*2;
}
console.log(Spr(5,10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo(r) {
    return Math.PI * r * r;
}
console.log(kolo(20));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylindr(r,h) {
    return Math.PI * r * r * h;
}
console.log(cylindr(20, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function showarray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let array = [10,20,'qeqe',131,true];

showarray(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function CreateP(value) {
 return document.write(`<p>${value}</p>`);
}
let arg = 1231231;
CreateP(arg);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 function CreateUl(argUl) {
document.write(`<ul>
    <li>${argUl}</li>
    <li>${argUl}</li>
    <li>${argUl}</li>
                </ul> `)
 }
let argUl = 1231;
 CreateUl(argUl);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function CreateUl2(argUl2,itter) {
  for (let i = 0; i< itter;i++){
      document.write(`<li>${argUl2}</li>`);
  }
}
let argUl2 = 887;
let itter = 5;

CreateUl2(argUl2,itter);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function showAllRestarArguments(...arr) {
    console.log(arr);
}
showAllRestarArguments(123,true,'qweqewqwe');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function showAllArguments() {
        console.log(arguments)
}
showAllArguments(123,true,'qweqewqwe',1231231);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13