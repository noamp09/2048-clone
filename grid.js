const grid_size = 4;
const cell_size = 20;
const cell_gap = 2;

export default class Grid {
    #cells

    constructor (gridElement) {
        gridElement.style.setProperty("--grid-size", grid_size)
        gridElement.style.setProperty("--cell-size", `${cell_size}vmin`)
        gridElement.style.setProperty("--cell-gap", `${cell_gap}vmin`)
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(
                cellElement,
                index % grid_size,
                Math.floor(index / grid_size)
            )
        })
        console.log(this.cells)
    }

    get #emptycells() {
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell() {
        const randomIndex = Math.floor(Math.random() * this.#emptycells.length)
        return this.#emptycells[randomIndex]
    }
}

class Cell {
    #cellElement
    #x
    #y
    #tile

    constructor (cellElement, x, y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y
    }

    get tile() {
        return this.#tile
    }
}

function createCellElements(gridElement) {
    const cells = [];
    for (let i = 0; i < grid_size * grid_size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cells.push("cell");
        gridElement.append(cell);
    }
    return cells;
}