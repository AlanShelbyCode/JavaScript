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
//let array[10,20,qeqe,131,true];
showarray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13