// Завдання 1

// Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.


const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener("input", _.debounce(onChangeInput, 10))
function onChangeInput(event) {
    console.log(event.target.value);
    const size = event.target.value
    console.log(size);
    
    image.style.width = size + "%"
}


// Завдання 2

// Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.



const boxEl = document.querySelector("#box");

const btnEl = document.querySelector(".but");

let isMoving = false; 


function onMoveMouse(event) {
    const x = event.clientX;
    const y = event.clientY;
    boxEl.style.transform = `translate(${x}px, ${y}px)`;
}

btnEl.addEventListener("click", () => {
    if (isMoving) {

        window.removeEventListener("mousemove", onMoveMouse);
        isMoving = false;
        btnEl.textContent = "Start"; 
    } else {

        window.addEventListener("mousemove", onMoveMouse);
        isMoving = true;
        btnEl.textContent = "Stop"; 
    }
});
