// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.



const wrapper = document.createElement('div')
wrapper.style.marginTop='100px'
wrapper.style.display='flex';
wrapper.style.flexWrap='wrap'
wrapper.style.justifyContent='center'
wrapper.style.columnGap='10px'
wrapper.style.rowGap='20px'

users.forEach(user=>{
    const {name,age,status} = user;
    const itemBlock = document.createElement('div')
    itemBlock.style.width='300px'
    itemBlock.style.padding="10px";
    itemBlock.style.border = '2px solid grey'
    itemBlock.style.borderRadius='10px'
    itemBlock.style.display = 'flex'
    itemBlock.style.flexDirection='column'
    itemBlock.style.backgroundColor='#789c9c';
    itemBlock.style.color='white'
    itemBlock.style.padding='20px'
    itemBlock.style.alignItems='center'

    const itemName = document.createElement('div')
    itemName.textContent=`Name: ${name}`;
    itemName.style.fontSize='24px'
    const itemAge = document.createElement('div')
    itemAge.textContent=`Age: ${age}`;
    itemAge.style.fontSize='24px'
    const itemStauts = document.createElement('div')
    itemStauts.textContent=`Status: ${status}`;
    itemStauts.style.fontSize='24px'

    const btn = document.createElement('button')
    btn.style.outline='none';
    btn.style.border='none';
    btn.textContent='Add to Favorites'
    btn.style.width='150px';
    btn.style.padding='10px';
    btn.style.marginTop='20px'
    btn.style.cursor='pointer'


    btn.addEventListener('click',()=>{
        const obj={
            name:name,
            age:age,
            status:status
        }
        let arrayOfFavoritesUser = JSON.parse(localStorage.getItem('favorites'))
        if(arrayOfFavoritesUser==null) arrayOfFavoritesUser = [];
        arrayOfFavoritesUser.push(obj)
        localStorage.setItem('favorites',JSON.stringify(arrayOfFavoritesUser))

    })

    itemBlock.append(itemName,itemAge,itemStauts,btn)
    wrapper.append(itemBlock)
})

document.body.append(wrapper)
