
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const [nameOfProduct,countOfProduct,priceOfProduct,imageOfProduct] = document.querySelectorAll('input')

    const obj={
        name:nameOfProduct.value,
        count:countOfProduct.value,
        price:priceOfProduct.value,
        img:imageOfProduct.value
    }

     let valueOfStorege = JSON.parse(localStorage.getItem('ProductsList'))
     if(valueOfStorege==null) valueOfStorege = [];
     valueOfStorege.push(obj)
     localStorage.setItem('ProductsList',JSON.stringify(valueOfStorege))

    document.querySelectorAll('input').forEach(input=>input.value='')
})