const colorButton = document.getElementById("colorButton");
const resetButton = document.getElementById("resetButton");

colorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = 
        '#' + Math.floor(Math.random() * 16777215).toString(16);
});

resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = ""; // Reseta para a cor padrão
});
