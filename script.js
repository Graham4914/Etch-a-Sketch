let isErasing = false;
let isRandomColor = false;
let isDrawing = false;

//Event listners to draw on mousedown
const gridContainer = document.getElementById("gridContainer");

gridContainer.addEventListener('mousedown', startDrawing);
gridContainer.addEventListener('touchstart', startDrawing);

gridContainer.addEventListener('mouseup', stopDrawing);
gridContainer.addEventListener('touchend', stopDrawing);

function startDrawing(event) {
    event.preventDefault();
    isDrawing = true;
}

function stopDrawing(event) {
    event.preventDefault();
    isDrawing = false;
}


//Event listener for clear button
document.getElementById("clearButton").addEventListener("click", function() {
    const squares = document.querySelectorAll("#gridContainer > div");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});

//Event listener for Eraser 
document.getElementById("eraserButton").addEventListener("click", function() {
    isErasing = !isErasing;
    if(isErasing) {
        this.classList.add('button-active');
    } else {
        this.classList.remove('button-active');
    }
});

//Event Listener for Random color toggle
document.getElementById("randomColor").addEventListener("click", function() {
    isRandomColor = !isRandomColor;
    if(isRandomColor) {
        this.classList.add('button-active');
    } else {
        this.classList.remove('button-active');
    }
});

//creates grid
function createGrid(squaresPerSide = 16) {
    const container = document.getElementById("gridContainer");
    const squareSize = container.offsetWidth / squaresPerSide;
    
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement("div");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }
    }
}

//new funtion to handel tocuh as well as mouseover
function addSquareHoverEffect() {

    function draw(event) {
        let targetElement = event.type === "touchmove" ? document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY) : event.target;

        if (isDrawing) {
            if (isErasing) {
                event.target.style.backgroundColor = "white";
            } else if (isRandomColor) {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            } else {
                event.target.style.backgroundColor = "black";
            }
        }
    }

    gridContainer.addEventListener("mouseover", draw);
    gridContainer.addEventListener("touchmove", draw);
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