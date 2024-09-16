const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#FFBD33", "#8D33FF", "#33FFEC", 
    "#FFD733", "#33FF99", "#9DFF33", "#B533FF", "#33A7FF", "#FF5733", "#33FFB3",
    "#D833FF", "#FF33DA", "#33FF57", "#5733FF", "#F833FF", "#FF7733", "#33FFAC",
    "#FF338B", "#8C33FF", "#FF3333", "#33FFEB", "#FF333D", "#5733FF", "#33F9FF",
    "#FF5733", "#33FF4D", "#A233FF", "#33FF91", "#FF33E8", "#3380FF", "#FFBD33",
    "#8B33FF", "#FF33A2", "#33FFA1", "#3357FF", "#FF33BC", "#D833FF", "#FF5733",
    "#33FF8A", "#3388FF", "#FF338A", "#9D33FF", "#33FFDD", "#FF57A3", "#33FF57"
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.body.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        changeColor();
    }
});

document.body.addEventListener("touchstart", function() {
    changeColor();
});
