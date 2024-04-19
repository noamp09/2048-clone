import Grid from "./grid.js"

const gameboard = document.querySelector("#gameboard")

const grid = new Grid(gameboard)

console.log(grid.randomEmptyCell())

// grid.randomEmptyCell().tile = new Tile(gameboard)
// grid.randomEmptyCell().tile = new Tile(gameboard)