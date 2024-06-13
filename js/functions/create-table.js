import { area } from "../figures/figures";

export function createTable(){
    const table = document.querySelector(".section__game");
    area.forEach((el)=>{
        let tr = document.createElement("tr");
        el.forEach((elInner)=>{
            let td = document.createElement("td");
            tr.appendChild(td);
        })
        table.appendChild(tr);
   
    })
}
