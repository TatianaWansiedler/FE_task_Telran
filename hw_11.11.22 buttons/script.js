
const buttons = document.querySelectorAll('.item');

const buttonsArr = Array.from(buttons);

buttonsArr.map(button => {
    button.addEventListener('click', () => {
        let idAtr = button.getAttribute('id');
        if (idAtr == 'random') {
            document.body.style.background =
                `rgb( ${getRandomInt(0, 255)} , ${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
        } else {
            document.body.style.background = idAtr;
        }
    });
});


// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}



