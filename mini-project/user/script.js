window.onload = async ()=>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>{
            return result.json();
        })

    const wrapper = document.querySelector('.wrapper')

    users.forEach(user=>{
        const {id,name} = user
         const userBlock = document.createElement('div')
        userBlock.classList.add('user-block')

        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        idBlock.classList.add('id-block')
        const nameBlock = document.createElement('div')
        nameBlock.textContent=`Name: ${name}`
        nameBlock.classList.add('name-block')
        const btn = document.createElement('button')
        btn.classList.add('btn-show')
        btn.textContent = 'Show details!'

        btn.addEventListener('click',()=>{
            window.location.href=`../userDetails/index.html`
            const obj={
               userId:id
            }
            let valueOfStorege = JSON.parse(localStorage.getItem('idUser'))
            if(valueOfStorege==null) valueOfStorege = [];
            valueOfStorege.push(obj)
            localStorage.setItem('idUser',JSON.stringify(valueOfStorege))
        })
        userBlock.append(idBlock,nameBlock,btn)
        wrapper.append(userBlock)
    })
}
