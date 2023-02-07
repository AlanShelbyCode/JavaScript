// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr1 = [
//     1,2,3,4,5,true,'qwe',"qwe",8,9
// ];
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let bookReader = {
//
//
// };
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let bookReader1 = {
//     title : 'haryy',
//     pageCount: 13,
//     genre : 'male'
// };
// let bookReader2 = {
//     title : 'haryy',
//     pageCount: 15,
//     genre : 'male'
// };
// let bookReader3 = {
//     title : 'haryy',
//     pageCount: 15,
//     genre : 'male'
// };
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let bookReader4 = {
//     title : 'haryy',
//     pageCount: 15,
//     genre : 'male',
//     authors:[ 'joahn Roiling', 16]
// };
// let bookReader5 = {
//     title : 'haryy',
//     pageCount: 15,
//     genre : 'male',
//     authors:[ 'stiv hoking', 16]
// };
// let bookReader6 = {
//     title : 'haryy',
//     pageCount: 15,
//     genre : 'male',
//     authors:[ 'egor gtin', 16]
// };
// console.log(bookReader1);
// console.log(bookReader2);
// console.log(bookReader3);
// console.log(bookReader4);
// console.log(bookReader5);
// console.log(bookReader6);
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// //
//
// let masyw =  [{
//         title: 'haryy',
//         pageCount: 15,
//         genre: 'male',
//         authors: ['egor gtin', 16]
//     },
//     {
//         title: 'Potter',
//         pageCount: 15,
//         genre: 'male',
//         authors: ['egor gtin', 16]
//     },
//     {
//         title: 'Ricki',
//         pageCount: 15,
//         genre: 'male',
//         authors: ['egor gtin', 16]
//     },
// ];
// console.log(masyw[0].title);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
//
//
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// //
//
//
// //
// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1453;
//
// if( x!== 0){
//     console.log('Wirno');
// }
// else {
//     console.log('Ne wirno');
// }
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// time = 16;
// if(time>0 && time<=15 ){
//     console.log('1');
// }
// else if(time>15 && time<=30 ){
//     console.log('2');
// }
//
// else if(time>30 && time<=45 ){
//     console.log('3');
// }
//
// else if(time>45 && time<=60 ){
//     console.log('4');
// }
// else {
//     console.log('Defined time is undefind');
// }
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 10;
// if (0<day<=10){
//     console.log('1');
// }
// else if (10<day<=20){
//     console.log('2');
// }
// else if (20<day<=31){
//     console.log('3');
// }
// else{
//     'deklarate errors items';
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day  = 10;
switch (day) {
    case 1:
        console.log('eating');
        break;
    case 2:
        console.log('eating');
        break;
    case 3:
        console.log('eating');
        break;
    case 4:
        console.log('eating');
        break;
    case 5:
        console.log('eating');
        break;
    case 6:
        console.log('eating');
        break;
    case 7:
        console.log('eating');
        break;
    default :
        console.log('day are undefiend');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('num 1');
let num2 = prompt('num 2');
if (isNaN(num1)){
    console.log('num 1 is not a number');
}
if (isNaN(num2)){
    console.log('num 2 is not a number');
}
else if( num1 === num2) {
    console.log('numbers is equel');
}
else if (num1 < num2){
    console.log('num 1 is biger');
}
else if (num1 > num2){
    console.log('num 1 is biger');
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
