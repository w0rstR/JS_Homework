// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста





async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const result = res.json();
            return result
        }).then(res=>{
            createUser(res)
        })
}
getUsers()




async function createUser(arr){
    const wrapper = document.createElement('div')
    const userContainer = document.createElement('div')
    userContainer.classList.add('user-container')
    wrapper.classList.add('wrapper')

    arr.forEach((user,i)=>{
        const {id,name,username,email,address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{name:companyName,cathPhrase,bs}}= user

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
        btn.textContent = 'Click!!!'
        btn.classList.add('btn-user')

        userBlock.append(idBlock,nameBlock,usernameBlock,emailBlock,streetBlock,suiteBlock,cityBlock,zipcodeBlock,latBlock,lngBlock,phoneBlock,websiteBlock,companyNameBlock,cathPhraseBlock,bsBlock,btn)
        userContainer.append(userBlock)
        wrapper.append(userContainer)
    })
    document.body.append(wrapper)

    const userblock = document.querySelectorAll('.user-block')
    for(let i =0;i<arr.length;i++){
        const respone = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${i+1}`)
            .then(res=>{
                const response = res.json();
                return response
            }).then(res=>{
                createPost(res,userblock[i])
            })
    }
    setTimeout(()=>{
    const userButtons = document.querySelectorAll('.btn-user')
    const postsBlock = document.querySelectorAll('.post-wrapper')
    userButtons.forEach((btn,i)=>{
        btn.addEventListener(('click'),()=>{
            if(postsBlock[i].classList.contains('d-block')){
                postsBlock[i].classList.remove('d-block')
                postsBlock[i].classList.add('d-none')
            }else{
                postsBlock[i].classList.remove('d-none')
                postsBlock[i].classList.add('d-block')
            }
        })
    })
},3000)



}


async function  createPost(arr,container){
    const postWrapper = document.createElement('div')

    postWrapper.classList.add('post-wrapper')
    postWrapper.classList.add('d-block')


    for (const p of arr) {
        const i = arr.indexOf(p);
        const {userId,id,title,body} = p;
        const postBlock = document.createElement('div')
        postBlock.classList.add('post')

        const userIdBlock = document.createElement('div')
        userIdBlock.textContent=`Post id: ${userId}`
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const titleBlock = document.createElement('div')
        titleBlock.textContent=`Title: ${title}`
        const postBody = document.createElement('div')
        postBody.textContent=`Body: ${body}`
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.textContent='Click!'
        postBlock.append(userIdBlock,idBlock,titleBlock,postBody,btn)
        postWrapper.append(postBlock)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i+1}/comments`)
            .then(res=>{
                const response = res.json();
                return response;
            }).then(res=>{
                createCommentForPost(res,postBlock,btn)
            })

    }
    container.append(postWrapper)

}

async function createCommentForPost(arr,container,btn){
    const wrapperComent=document.createElement('div')
    wrapperComent.classList.add('wrapper-comment')
    wrapperComent.classList.add('d-block')
    arr.forEach((comment)=>{
        const {postId,id,name,email,body}=comment;
        const commentBlock = document.createElement('div')
        commentBlock.classList.add('comment-block')
        const comentId = document.createElement('div')
        comentId.textContent=`Coment id: ${postId}`
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const comentName = document.createElement('div')
        comentName.textContent=`Name: ${name}`
        const comentEmail = document.createElement('div')
        comentEmail.textContent=`Email: ${email}`
        const comentBody = document.createElement('div')
        comentBody.textContent=`Body: ${body}`
        commentBlock.append(comentId,idBlock,comentName,comentEmail,comentBody)
        wrapperComent.append(commentBlock)
    })
    container.append(wrapperComent)

    btn.addEventListener('click',(e)=>{
        if(wrapperComent.classList.contains('d-block')){
            wrapperComent.classList.remove('d-block')
            wrapperComent.classList.add('d-none')
        }else{
            wrapperComent.classList.remove('d-none')
            wrapperComent.classList.add('d-block')
        }
    })

}
















