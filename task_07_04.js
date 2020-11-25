/*Счетчик состоит из спана и кнопок, которые должны увеличивать и
уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее
значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения
значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и
обновление интерфейса*/

let value = 0;

function render() {
    counter.counterValue.textContent = value;
}

const counter = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
};

counter.btnDecrement.addEventListener('click', () => {
    value -= 1;
    render();
});

counter.btnIncrement.addEventListener('click', () => {
    value += 1;
    render();
});
