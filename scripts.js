// Functions

for (let i = 0; i < (16 * 16); i++) {
    var node = document.createElement("div");
    node.className = "cell";
    document.getElementById("container").appendChild(node);
}

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mouseenter', event => {
        event.target.classList.remove('cell');
        event.target.classList.add('shaded');;
    })
})

function resetGame() {
    const shadedList = document.querySelectorAll('.shaded');
    shadedList.forEach(function (singleCell) {
        singleCell.classList.remove('shaded');
        singleCell.classList.add('cell');
    });

}

const button = document.getElementById("reset");
button.addEventListener('click', resetGame);