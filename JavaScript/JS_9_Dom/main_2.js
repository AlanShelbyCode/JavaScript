// створити блок,


let div  = document.createElement('div');
div.innerText = 'Text_!';
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add( `wrap`,`collapse`, `alpha`, `beta`);
// - додати стилі(довільні значення) :
// колір фону, колір тексту, розмір тексту
div.style.background = 'silver';
//колір тексту,
div.style.color = '#2A2E30';
//розмір тексту
div.style.fontSize = '25px';
//центрування
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.margin = '10px';

// - додати цей блок в body.
document.body.appendChild(div);


// - клонувати його повністю, та додати клон в body.
//

document.body.appendChild(div.cloneNode(true))

// - Є масив:
let masyw = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
document.write(`<hr>`);

for (const masywElement of masyw) {

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    itemLI = ul.appendChild(li);

    console.log(masywElement);
    itemLI.innerText = masywElement;
    document.body.append(itemLI);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
document.write(`<hr>`);
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let div2 = document.createElement('div');
    div2.innerText = `${coursesAndDurationArrayElement.title}  ${coursesAndDurationArrayElement.monthDuration}` ;
    document.body.append(div2);

}

document.write(`<hr>`);
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let div2 = document.createElement('div');
    div2.classList.add('item');

    let h1 = document.createElement('h1');
    div2.classList.add('heading');

    let p = document.createElement('p');
    div2.classList.add('description');
    div2.append(h1,p);


    h1.innerText = `${coursesAndDurationArrayElement.title}`;
    p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
    document.body.append(div2);

}
document.write(`<hr>`);
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (const simpsonses of simpsons) {

    let div2 = document.createElement('div');
    div2.classList.add('member');

    let h1 = document.createElement('h1');
    let h2 = document.createElement('h1');

    let p = document.createElement('p');
    let p1 = document.createElement('p');

    let img = document.createElement('img');

    h1.innedrText = `${simpsonses.name}`;
    h2.innedrText = `${simpsonses.surname}`;

    p.innerText = `${simpsonses.age}`;
    p1.innerText = `${simpsonses.info}`;

    img.src = simpsonses.photo;

    div2.append(h1,h2,p,p1,img);
}
document.write(`<hr>`);

//

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
