const container = document.querySelector("#container");
const resizebtn = document.querySelector("#resize");
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
    cellClear();
})

function createColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function cellColor() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) => {
            let brightness = getComputedStyle(e.target).getPropertyValue("filter").split(/\(([^)]+)\)/);
            if (brightness == "none") {
                e.target.style.backgroundColor = createColor();
                e.target.style.filter = "brightness(1)";
            } else if (brightness[1] > 0) {
                e.target.style.filter = `brightness(${brightness[1] - 0.2})`;
            }
        })
    }
}

function cellClear() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            cells[i].removeAttribute("style")
        })
    }
}

createCells();
cellColor();
cellClear();