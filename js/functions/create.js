export function create(shape){
    const lines  = shape.length;
    const cubesInLine = shape[0].length; 
    const figure = document.querySelector(".figure");
    
    for (let i = 0 ; i < shape.length; i++){
        const lineElement = document.createElement("div");
    
        for (let j = 0 ; j < shape[i].length; j++){
            const cube = document.createElement("span");
            if(shape[i][j]){
                cube.classList.add("cube");     
            }else{
                cube.classList.add("empty");
            }
            lineElement.appendChild(cube);
        }
        figure.appendChild(lineElement);
        lineElement.classList.add("line");
    }
}
