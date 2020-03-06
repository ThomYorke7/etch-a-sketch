const container = document.querySelector("#container");
const resizebtn = document.querySelector("#reset");
const clearbtn = document.querySelector("#clear");
const rainbowbtn = document.querySelector("#rainbow");
const gridLines = document.documentElement;
const cells = document.getElementsByClassName("cell");

function createCells(quantity = 16) {
    for (let i = 0; i < quantity ** 2; ++i) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        container.appendChild(newDiv);
    }
}

resizebtn.addEventListener("click", () => {
    container.innerHTML = ""
    const quantity = prompt("Set the grid using a value between 2 and 64.");
    if (quantity < 2 || quantity > 64) {
        quantity = prompt("Please insert a value from 2 to 64.")
    }
    createCells(quantity);
    gridLines.style.setProperty("--quantity", quantity)
    cellColor();
})



function cellColor() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            cells[i].style.backgroundColor = "#" + randomColor;
        })
    }
}

function cellClear() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].style.backgroundColor = "white";
        })
    }
}

createCells();
cellColor();

clearbtn.addEventListener("click", cellClear);
rainbowbtn.addEventListener("click", cellColor);