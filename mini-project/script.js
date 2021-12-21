window.onload = async ()=>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>{
            return result.json();
        })

    const wrapper = document.querySelector('.wrapper')

    users.forEach(user=>{
        const userBlock = document.createElement('div')
    })
}
