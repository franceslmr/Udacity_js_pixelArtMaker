// Select size input
const sizeSubmit = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// Select color input
const inputColor = document.getElementById('colorPicker');

// Identify table element & cells
const grid = document.getElementById('pixelCanvas');
const squares = document.getElementById('pixelCanvas').getElementsByTagName('td');

// When size is submitted by the user, call makeGrid()
sizeSubmit.addEventListener('submit', function(event) {
    event.preventDefault(); // to prevent the page from refreshing upon click on the button
    grid.innerHTML = '' // to reset the table content
    let gridHeight = inputHeight.value;
    let gridWidth = inputWidth.value;
    makeGrid(gridHeight, gridWidth);
})

// Function to create grid
function makeGrid(gridHeight, gridWidth) {
    for (let m = 0; m < gridHeight; m++) {
        let row = grid.insertRow(m); // first row has to be submitted at position 0
        for (let n = 0; n < gridWidth; n++) {
            let cell = row.insertCell(n);
        }
    }
}

// Event Listener & function to color a square when cell is clicked
grid.addEventListener('click', function(event) {
    let pickedColor = inputColor.value;
    let cell = event.target;
    cell.style.backgroundColor = pickedColor;
    //console.log(event.target);
})

// DEPRECATED: Function to color the entire grid
// function colorGrid(pickedColor) {
//     for (let i = 0; i < squares.length; i++) {
//         let cell = squares[i];
//         cell.style.backgroundColor = pickedColor;
//     }
// }