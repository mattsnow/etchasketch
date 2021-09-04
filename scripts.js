// Functions

for (let i = 0; i < (16 * 16); i++) {
    var node = document.createElement("div");
    node.className = "cell";
    node.id = `cell${i}`;
    document.getElementById("container").appendChild(node);
}

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mouseenter', event => {
        document.getElementById(event.target.id).style.border = '5px dotted orange';
    })
})