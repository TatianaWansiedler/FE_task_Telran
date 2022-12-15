
//Переменные
const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector('.products-wrapper')
const notification = document.querySelector('.notification')


// событие сабмит у формы
const addProduct = e => {
    e.preventDefault()
    const currProduct = productName.value
    const id = new Date().getTime().toString()

    createProducts(id, currProduct)
    addToLocalStorage(id, currProduct)
    showNotification()
    resetOptions()

}

//создание элементов 

const createProducts = (id, name) => {
    // создание элемента в HTML
    const element = document.createElement('div')
    element.setAttribute('id', id)
    element.classList.add('product')
    element.innerHTML = `
            <h5 class="product-name">${name}</h5>
            <div class="product-actions">
                <button class="delete-btn">Удалить</button>
                <button class="edit-btn">Редактировать</button>
            </div>
        `
    // Добавить слушатели события 
    const deleteBtn = element.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', deleteProduct)

    //Добавить в контейнер
    productsWrapper.append(element)
}

// Отображение при первой загрузке
function showProducts() {
    const products = localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : []

    products.forEach(product => {
        createProducts(product.id, product.name)
    })
}


// Добавление в localStorage
function addToLocalStorage(id, name) {
    const products = localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : []
    const newProduct = { id, name }
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))
}


//уведомление
const showNotification = (color) => {
    notification.style.display = 'block'
    // скрыть через 3 сек 
    setTimeout(() => {
        notification.style.display = 'none'
    }, 2000)
}

const resetOptions = () => {
    // очистка поля ввода 
    productName.value = ''
}

const deleteProduct = () => {
}


addForm.addEventListener('submit', addProduct);

showProducts()


/* 

1. Сделать универсальное уведомление. (принимать текст кнопки и цвет кнопки)
2. Сейчас данные сохраняются в локалсторедж, но при первой загрузке не отображаются,
    нужно отображать данные из локалстореджа при первой загрузке.

*/