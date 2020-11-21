"use strict";

/*Напиши скрипт, который для каждого элемента массива
ingredients создаст отдельный li,
после чего вставит все li за одну
операцию в список ul.ingredients.
Для создания DOM - узлов используй document.createElement().*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredList = document.getElementById(`ingredients`);
console.log(ingredList);

const elemRef = document.createElement(`li`);
elemRef.classList.add(`items`);

ingredList.append(elemRef);