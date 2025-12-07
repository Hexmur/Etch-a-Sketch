const container = document.querySelector("#container");

function initializeRows(){
  for(let i=0; i<gridDimension; i++){
    //rows[i] = document.getElementById(`row${i}`);
    rows[i] = document.createElement("div");
    rows[i].id = `row${i}`;
    rows[i].className = "row";
    container.appendChild(rows[i]);
  }
}

function initializeDivs(){
  count = 0;
  for(let i=0; i<gridDimension; i++){
    for(let j=0; j<gridDimension; j++){
      divs[count] = document.createElement("div");
      divs[count].id = "item";
      divs[count].style.width = `${700/gridDimension}px`;
      divs[count].style.height = `${700/gridDimension}px`;
      rows[i].appendChild(divs[count]);
      count++;
    }
  }
}

function deleteGrid(oldDimension){
  for(let i=0; i<oldDimension; i++){
    rows[i].remove();
    for(let j=0; j<oldDimension; j++){
      divs[j].remove();
    }
  }
}

let gridDimension = 4;

const rows = [];
initializeRows();

const divs = [];
let count = 0;
initializeDivs();

addEventListener("mouseover", (event)=>{
  if(event.target.id === "item"){
    event.target.style.backgroundColor = "black";
  }
});

addEventListener("mouseout", (event)=>{
  if(event.target.id === "item"){
    let R = Math.random()*256;
    let G = Math.random()*256;
    let B = Math.random()*256;
    event.target.style.backgroundColor = `rgb(${R+90}, ${G+130}, ${B+130})`;
    rgb(105, 132, 156)
  }
});

const button = document.getElementById("btnChange");
let value = 0;

button.addEventListener("click", ()=>{
  deleteGrid(gridDimension);
  gridDimension = prompt("Choose the grid dimension:");
  if(gridDimension > 100){
    gridDimension = 100;
  }
  
  initializeRows();
  initializeDivs();
});

