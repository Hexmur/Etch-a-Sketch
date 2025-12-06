const container = document.querySelector("#container");

const rows = [];
for(let i=0; i<4; i++){
  rows[i] = document.getElementById(`row${i}`);
}

const divs = [];
let count = 0;

for(let i=0; i<4; i++){
  for(let j=0; j<4; j++){
    divs[count] = document.createElement("div");
    divs[count].textContent = `${count}`;
    rows[i].appendChild(divs[count]);

    //divs[count].style.flex = "1";
    divs[count].id = "item";
    divs[count].style.flexGrow = 0;
    divs[count].style.width = "50px";
    divs[count].style.height = "50px";
    divs[count].style.alignContent = "center";
    divs[count].style.border = "solid red"
    count++;
  }
}

let hover = document.querySelector('#hover');