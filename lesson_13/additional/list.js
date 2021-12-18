
const mainWrapper = document.createElement('div')
mainWrapper.classList.add('main-wrapper')

const listOfProducts = JSON.parse(localStorage.getItem('ProductsList'))
function createProducts(list){
    const clearBtn = document.createElement('button')
    clearBtn.textContent='Clear all Products'
    clearBtn.classList.add('clear-btn')
    const container = document.createElement('div')
    container.classList.add('container')

    if(list!=null){
        list.forEach((product,i)=>{
            const {name,count,price,img}=product;

            const productItem = document.createElement('div')
            productItem.classList.add('product-item')

            const productName = document.createElement('div')
            productName.textContent= `Product name: ${name}`;
            const productCount = document.createElement('div')
            productCount.textContent=`Count of Product: ${count}`;
            const productPrice = document.createElement('div')
            productPrice.textContent=`Price of Product: ${price}`;
            const productImg = document.createElement('img')
            productImg.src=img
            productImg.alt='IMG'
            const btn = document.createElement('btn')
            btn.textContent = 'Delete this product'
            btn.classList.add('btn')

            productItem.append(productName,productCount,productPrice,productImg,btn)
            container.append(productItem)
            mainWrapper.append(container)

            btn.addEventListener('click',(e)=>{
                const newListOfProduct = [...list.slice(0,i),...list.slice(i+1)]
                localStorage.setItem('ProductsList',JSON.stringify(newListOfProduct))
                location.reload()
            })
        })
        document.body.append(clearBtn,mainWrapper)
        clearBtn.addEventListener('click',()=>{
            localStorage.clear();
            location.reload()
        })
    }else{
        const title = document.createElement('div')
        title.textContent = 'Немає продуктів'
        title.classList.add('title')
        mainWrapper.append(title)
        document.body.append(mainWrapper)
    }

}
createProducts(listOfProducts)
