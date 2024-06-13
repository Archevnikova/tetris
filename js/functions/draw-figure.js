import { activeFigure } from "../../main";
import { position } from "../figures/position";


export function drawFigure(){
    let rows = document.querySelectorAll("tr");
    let cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
        cell.removeAttribute("class");
        cell.classList.add("empty");
      });
    for (let i = position.column, a = 0; i< position.column + activeFigure.length; i++,a++){
        for (let j = position.row, b = 0; j < position.row + activeFigure[0].length;j++, b++){
            const cellsInner = rows[i].querySelectorAll("td");
            if(activeFigure[a][b].cube === 1 ) cellsInner[j].classList.add("cube");
        }
    } 

    
}