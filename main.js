import './style.css'
// import { setupCounter } from './counter.js'
import { create } from './js/functions/create.js'
import { corner, line, square, t, z } from './js/figures/figures.js';

import { createTable } from './js/functions/create-table.js';
import { drawFigure } from './js/functions/draw-figure.js';
import { position } from './js/figures/position.js';



// document.querySelector('#app').innerHTML = `
//   <div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
const shapes = [corner, line, square, t, z ];
const paintClassesArray = ["blue","red","yellow","green","orange"];
const paintClassIndex = parseInt(Math.random()*5);
const index = parseInt(Math.random()*5);
export const activeFigure = shapes[index];  
createTable();
drawFigure();

addEventListener("keydown",(event)=>{
    if(event.code =="ArrowLeft"){
        position.row--;
        drawFigure();
    }else if (event.code =="ArrowRight"){
        position.row++;
        drawFigure();
    }

    
})
// create(shapes[index]); 
// paint();


// function paint(){
//     const cubesArr = document.querySelectorAll(".cube");
//     cubesArr.forEach((el)=>{
//         el.classList.add(paintClassesArray[paintClassIndex]);
//     })
// }
