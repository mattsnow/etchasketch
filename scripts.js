// Functions

function resetGame() {
    const shadedList = document.querySelectorAll('.shaded');
    shadedList.forEach(function (singleCell) {
        singleCell.classList.remove('shaded');
        singleCell.classList.add('cell');
    });
    let gridSize = prompt("What size would you like the new grid?");
    generateGrid(gridSize);

}

function generateGrid(size) {
    let container = document.getElementById("container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        var node = document.createElement("div");
        node.className = "cell";
        document.getElementById("container").appendChild(node);
    }

    addMouseListener();
}

function addMouseListener() {
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseenter', event => {
            event.target.classList.remove('cell');
            event.target.classList.add('shaded');;
        })
    })
}

// Main Code

const button = document.getElementById("reset");
button.addEventListener('click', resetGame);

generateGrid(16);
addMouseListener();