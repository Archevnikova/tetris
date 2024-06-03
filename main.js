import './style.css'
// import { setupCounter } from './counter.js'
import { create } from './js/functions/create.js'
import { corner, line, square, t, z } from './js/figures/figures.js';


// document.querySelector('#app').innerHTML = `
//   <div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
const shapes = [corner, line, square, t, z ];
const index = parseInt(Math.random()*5)
create(shapes[index]);