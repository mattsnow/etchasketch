// Functions

function resetGame() {
    const shadedList = document.querySelectorAll('.shaded');
    shadedList.forEach(function (singleCell) {
        singleCell.classList.remove('shaded');
        singleCell.classList.add('cell');
    });

    let gridSize = prompt("What size would you like the new grid?");
    if (gridSize < 1 | (gridSize > 50)) {
        gridSize = 16;
    }
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
            while (event.target.classList == 'cell') {

                event.target.classList.remove('cell');
                event.target.classList.add('shaded');;

                if (tickBox.checked == true) {
                    event.target.style.backgroundColor = getRandomColour(colorArray);
                }
                
            }
        })
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColour(array) {
    return array[getRandomInt(array.length)]
}

// Main Code

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

const tickBox = document.getElementById("selectRandom");
const button = document.getElementById("reset");
button.addEventListener('click', resetGame);

generateGrid(16);
addMouseListener();