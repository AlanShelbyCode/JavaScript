// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let SPram = (a,b) => a*b;
document.write(SPram(10,20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let kolo = (r) => r * Math.PI;
document.write(kolo(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylindr = (r,h) => r * Math.PI * h;
document.write(cylindr(10,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let  masyw = (arr) => {
    for (const arrElement of arr) {
        document.write(arrElement);
    }
};
let arr = [123,123,'qweqweqe',true]
masyw(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragrapg = (valueP) =>{
    document.write(`<p>${valueP}</p>`);
}
let valueP = 'qwe';
paragrapg(valueP);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let CreateUl = (argUl) => {
    document.write(`<ul>
    <li>${argUl}</li>
    <li>${argUl}</li>
    <li>${argUl}</li>
                </ul> `)
}
let argUl = 1231;
CreateUl(argUl);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let CreateUl2 = (argUl2,itter) => {
    for (let i = 0; i< itter;i++){
        document.write(`<li>${argUl2}</li>`);
    }
}
let argUl2 = 887;
let itter = 5;

CreateUl2(argUl2,itter);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let showAllRestarArguments = (...arr) => {
    document.write(arr);
}
showAllRestarArguments(123,true,'qweqewqwe');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let showObjects = (...arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(arr[i]);
    }
}
let arrObject = [
    {id:1, name: 'qwe', age: 123},
    {id:2, name: 'qwe', age: 123},
    {id:3, name: 'qwe', age: 123},
    {id:4, name: 'qwe', age: 123},
    {id:5, name: 'qwe', age: 123}
]
showObjects(arrObject);


// - створити функцію яка повертає найменьше число з масиву
let  findMin = (arrMin) => {
    let result = arrMin[0];
    for (let i = 1; i < arrMin.length; i++) {
        if(result >= arrMin[i]){
            result = arrMin[i];
        }
    }
    return result;
}
let arrMin = [5,2,3,4,5,6,3,1,4,3,0];
document.write(findMin(arrMin));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
let  findSum = (arrSum) => {
    let result = 0;
    for (let i = 0; i < arrSum.length; i++) {
        debugger;
        result = result + result[i];
    }
    return result;
}
let arrSum = [5,2,3,4,5,6,3,1,4,3,0];
document.write(findSum(arrSum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arrSwap, index_1, index_2 ) =>{
    let value_1 = arrSwap[index_1];
    let value_2 = arrSwap[index_2];

    arrSwap[index_1] = value_2;
    arrSwap[index_2] = value_1;
    return arrSwap;
}
let arrSwap = [5,2,3,4,5,6,3,1,4,3,0];
document.write(swap(arrSwap,0,1));

let swap2 = (index_1, index_2, ...arrSwap2 ) =>{
    let value_1 = arrSwap[index_1];
    let value_2 = arrSwap[index_2];

    arrSwap[index_1] = value_2;
    arrSwap[index_2] = value_1;
    return arrSwap2;
}
let arrSwap2 = [5,2,3,4,5,6,3,1,4,3,0];
document.write(swap2(0,1,arrSwap2));