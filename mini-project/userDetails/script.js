
window.onload = async ()=>{
    const wrapper = document.querySelector('.wrapper-user')
    const idUser = JSON.parse(localStorage.getItem('idUser'))


    async function createUser(){
        const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${idUser[0].userId}`)
            .then(response=>{
                return response.json()
            })

        const {id,name,username,email,address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{name:companyName,cathPhrase,bs}}= res

        const userContainer = document.createElement('div')
        userContainer.classList.add('user-container')

        const userBlock = document.createElement('div')
        userBlock.classList.add('user-block')
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const nameBlock = document.createElement('div')
        nameBlock.textContent=`Name: ${name}`
        const usernameBlock = document.createElement('div')
        usernameBlock.textContent=`Username: ${username}`
        const emailBlock = document.createElement('div')
        emailBlock.textContent = `Email: ${email}`
        const streetBlock = document.createElement('div')
        streetBlock.textContent=`Email: ${street}`
        const suiteBlock = document.createElement('div')
        suiteBlock.textContent=`Suite: ${suite}`
        const cityBlock = document.createElement('div')
        cityBlock.textContent= `City: ${city}`
        const zipcodeBlock = document.createElement('div')
        zipcodeBlock.textContent=`Zipcode: ${zipcode}`
        const latBlock = document.createElement('div')
        latBlock.textContent=`Lat: ${lat}`
        const lngBlock = document.createElement('div')
        lngBlock.textContent=`Lng: ${lng}`
        const phoneBlock = document.createElement('div')
        phoneBlock.textContent = `Phone: ${phone}`
        const websiteBlock = document.createElement('div')
        websiteBlock.textContent = `Website: ${website}`
        const companyNameBlock = document.createElement('div')
        companyNameBlock.textContent = `Company name: ${companyName}`
        const cathPhraseBlock = document.createElement('div')
        cathPhraseBlock.textContent = `Cath phrase: ${cathPhrase}`
        const bsBlock = document.createElement('div')
        bsBlock.textContent = `Bs: ${bs}`
        const btn = document.createElement('button')
        btn.textContent = 'Show user posts!'
        btn.classList.add('btn-user')

        userBlock.append(idBlock,nameBlock,usernameBlock,emailBlock,streetBlock,suiteBlock,cityBlock,zipcodeBlock,latBlock,lngBlock,phoneBlock,websiteBlock,companyNameBlock,cathPhraseBlock,bsBlock,btn)
        userContainer.append(userBlock)
        wrapper.append(userContainer)

        btn.addEventListener('click',async ()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser[0].userId}/posts`)
                .then(res=>{
                    return res.json();
                }).then(result=>{
                    createPostOfUsers(result)
                })
        })

    }


    createUser()

    async function createPostOfUsers(arr){
        const mainWrap = document.querySelector('.wrapper-posts')
        const postWrapper = document.createElement('div')
        postWrapper.classList.add('post-wrapper')

        arr.forEach(post=>{
            const {userId,id,title,body} = post;
            const postBlock = document.createElement('div')
            postBlock.classList.add('post')
            const userIdBlock = document.createElement('div')
            userIdBlock.textContent=`Post id: ${userId}`
            const idBlock = document.createElement('div')
            idBlock.innerText=`Id: ${idBlock}`
            const titleBlock = document.createElement('div')
            titleBlock.textContent=`Title: ${title}`
            const postBody = document.createElement('div')
            postBody.textContent=`Body: ${body}`
            const btn = document.createElement('button')
            btn.classList.add('post-btn')
            btn.textContent = 'Show post details'


            postBlock.append(userIdBlock,id,titleBlock,postBody,btn)
            postWrapper.append(postBlock)
            mainWrap.append(postWrapper)

            btn.addEventListener('click',()=>{
                window.location.href=`../postDetails/index.html`

                const obj={
                    postId:id
                }
                let valueOfStorege = JSON.parse(localStorage.getItem('idPost'))
                if(valueOfStorege==null) valueOfStorege = [];
                valueOfStorege.push(obj)
                localStorage.setItem('idPost',JSON.stringify(valueOfStorege))
            })
        })
    }
}
