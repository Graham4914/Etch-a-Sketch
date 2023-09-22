//Event listners to draw on mousedown
let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

//creates grid
function createGrid(squaresPerSide = 16) {
    const container = document.getElementById("gridContainer");
    const sqaureSize = container.offsetWidth / squaresPerSide;
    
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement("div");
            square.style.width = `${sqaureSize}px`;
            square.style.height = `${sqaureSize}px`;
            container.appendChild(square);
        }
    }
}
//function to fill squares on hover
function addSquareHoverEffect() {
    document.querySelectorAll("#gridContainer > div").forEach(div => {
        div.addEventListener('mouseover', function() {
            if (isDrawing) {
                div.style.backgroundColor = "black";
            }
        });
    });
}

//function to reset the grid and select square volume
function resetGrid() {
    let sqauresPerSide = prompt("Choose a number of sqaures wide between 1 and 100:");
    squaresPerSide = parseInt(sqauresPerSide);
    if (sqauresPerSide <1 || sqauresPerSide > 100 || isNaN(sqauresPerSide)) {
        alert("Number must be between 1 and 100");
        return;
    }
    document.getElementById("gridContainer").innerHTML = '';
    createGrid(sqauresPerSide);
    addSquareHoverEffect();
}



document.getElementById("gridSize").addEventListener('click', resetGrid);

window.onload = function() {
    createGrid();
    addSquareHoverEffect();
}