const container = document.querySelector("#container");

function initializeRows(){
  for(let i=0; i<4; i++){
    rows[i] = document.getElementById(`row${i}`);
  }
}

function initializeDivs(){
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
}

const rows = [];
initializeRows();

const divs = [];
let count = 0;
initializeDivs();