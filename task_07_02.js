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


const ingredient = ingredients.map((element) => {
  const item = document.createElement(`li`);
  item.textContent = element;
  return item;
  });

const getNodeListToString = function (nodesList) {
   return nodesList.map(element => element.outerHTML).join('');
 }    
 document.querySelector("#ingredients").insertAdjacentHTML('afterbegin',getNodeListToString(ingredient));