// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//


// class Obj{
//     constructor(id,name,username,email,street,suite, city,zipcode,lat,lng,phone,website,companyName,catchPhrase,bs) {
//         this.id=id;
//         this.name=name;
//         this.username=username;
//         this.email=email;
//         this.street=street;
//         this.suite=suite;
//         this.city=city;
//         this.zipcode=zipcode;
//         this.lat=lat;
//         this.lng=lng;
//         this.phone=phone;
//         this.website=website;
//         this.companyName=companyName;
//         this.catchPhrase=catchPhrase;
//         this.bs=bs;
//
//     }
//
//     crateObj=function (){
//         return{
//             id:this.id,
//             username:this.username,
//             email:this.email,
//             address:{
//                 street:this.street,
//                 suite:this.suite,
//                 city:this.city,
//                 geo:{
//                     lat:this.lat,
//                     lng:this.lng
//                 }
//             },
//             phone:this.phone,
//             website:this.website,
//             company:{
//                 companyName:this.companyName,
//                 catchPhrase:this.catchPhrase,
//                 bs:this.bs
//             }
//         }
//     }
// }
//
//
// const newObj=new Obj(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496', '1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
//
//
// console.log(newObj.crateObj())




// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag{
    constructor(tagName,descAction,arrayOfAttributes) {
        this.tagName=tagName;
        this.descAction=descAction;
        this.arrayOfAttributes=arrayOfAttributes;
    }
    nawTag=function (){
        return {
            titleOfTag:this.tagName,
            descAction:this.descAction,
            arrayOfAttributes:[
                ...this.arrayOfAttributes
            ]
        }
    }
}

const tagA=new Tag('a',
    'является одним из важных элементов HTML и предназначен для создания ссылок',
    [{titleOfAttr:'accesskey',actionOfAttr:'Активация ссылки с помощью комбинации клавиш'},
        {titleOfAttr:'href',actionOfAttr:'Задает адрес документа, на который следует перейти.'}])
console.log(tagA.nawTag())

const tagDiv=new Tag('div',
    'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    [{titleOfAttr:'align',actionOfAttr:'Задает выравнивание содержимого тега div'},
        {titleOfAttr:'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому'}])
console.log(tagDiv.nawTag())

const tagH1=new Tag('h1',
    'представляет собой наиболее важный заголовок первого уровня',
    [{titleOfAttr:'align',actionOfAttr:'Определяет выравнивание заголовка'},
        {titleOfAttr:'id',actionOfAttr:'Указывает имя стилевого идентификатора.'}])
console.log(tagH1.nawTag())

const tagSpan=new Tag('span',
    'предназначен для определения строчных элементов документа',
    [{titleOfAttr:'accesskey',actionOfAttr:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
        {titleOfAttr:'class',actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}])
console.log(tagSpan.nawTag())

const tagInput=new Tag('input',
    'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    [{titleOfAttr:'accesskey',actionOfAttr:'Переход к элементу с помощью комбинации клавиш.'},
        {titleOfAttr:'align',actionOfAttr:'Определяет выравнивание изображения.'}])
console.log(tagInput.nawTag())



const tagForm=new Tag('form',
    'устанавливает форму на веб-странице',
    [{titleOfAttr:'method',actionOfAttr:'Метод протокола HTTP.'},
        {titleOfAttr:'action',actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'}])
console.log(tagForm.nawTag())

const tagOption=new Tag('option',
    'определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
    [{titleOfAttr:'disabled',actionOfAttr:'Заблокировать для доступа элемент списка.'},
        {titleOfAttr:'label',actionOfAttr:'Указание метки пункта списка.'}])
console.log(tagOption.nawTag())

const tagSelect=new Tag('select',
    'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее',
    [{titleOfAttr:'accesskey',actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
        {titleOfAttr:'autofocus',actionOfAttr:'Устанавливает, что список получает фокус после загрузки страницы.'}])
console.log(tagSelect.nawTag())

