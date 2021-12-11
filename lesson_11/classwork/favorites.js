


const arrayOfFavoritesUsers = JSON.parse(localStorage.getItem('favorites'))

const wrapper = document.createElement('div')
wrapper.style.marginTop='100px'
wrapper.style.display='flex';
wrapper.style.flexWrap='wrap'
wrapper.style.justifyContent='center'
wrapper.style.columnGap='10px'
wrapper.style.rowGap='20px'

if(arrayOfFavoritesUsers==null){
    const itemBlock = document.createElement('div')
    const title = document.createElement('div')
    title.textContent='Немає улюблених користувачів!!!'
    title.style.fontSize='36px'
    itemBlock.style.width='500px'
    itemBlock.style.padding="10px";
    itemBlock.style.border = '2px solid grey'
    itemBlock.style.borderRadius='10px'
    itemBlock.style.backgroundColor='#789c9c';
    itemBlock.style.color='white'
    itemBlock.style.padding='20px'
    title.style.textAlign='center'
    itemBlock.append(title)
    wrapper.append(itemBlock)
}else{
    arrayOfFavoritesUsers.forEach(user=>{
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

        itemBlock.append(itemName,itemAge,itemStauts)
        wrapper.append(itemBlock)
    })
}



document.body.append(wrapper)