const main = document.querySelector('main');

let books = [
    {
        id: 1,
        author: "Пушкин",
        name: "Капитанская дочка",
        count: 500
    },
    {
        id: 2,
        author: "Толстой",
        name: "Война и мир",
        count: 1000
    },
    {
        id: 3,
        author: "Толстой",
        name: "Война и мир",
        count: 1000
    }
];

//добавим кнопку удалить 

function showBooks(arr) {
    arr.map(book => {
        main.innerHTML += `
        <div class="book book-${book.id}">
            <h1>Название: ${book.name}</h1>
            <p>Автор: ${book.author}</p>
            <p>Количество страниц: ${book.count}</p>
            <button class = "delete-btn" id="${book.id}">Удалить</button>
        </div>
        `;
    });
}

showBooks(books);

const buttons = document.querySelectorAll('.delete-btn');


// 1. Понять какой элемент удалять. При кликe вытаскивать id кнопки 
// 2.  Удалять родителя кнопки, по которой мы нажали


//ДЗ
// 3. При нажатии на кнопку удалить (при этом удалить из массива) Отфильтровать books, 
// что бы там не было элемента с id элемента который мы хотим удалить 


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let idAtr = button.getAttribute('id');
        let delBook = document.querySelector(`.book-${idAtr}`);
        delBook.remove();

        books = books.filter(book => book.id != idAtr); // меняем исходный массив 
        //let newBooks = books.filter(book => book.id != idAtr); // или сохраняем массив в новую переменную 
        console.log(books); // в консоли отфильтрованный массив 
        //showBooks(books); //если вызвать функцию происходит дублирование первоначальной и отфильтрованной разметки 
        //поэтому вызывать здесь функцию showBooks нет смысла
    });
});



