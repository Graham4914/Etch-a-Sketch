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

window.onload = function() {
    createGrid();
}
