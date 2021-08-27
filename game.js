// add vars 
// chamando o character do html
var character = document.getElementById("character");
// chamando o block do html
var block = document.getElementById("block");
// pra contagem dos pontos
var counter = 0;

function jump(){
    if (character.classList.contains("animate")) {return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },600)
}

var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft >- 20 && characterTop >= 130 ) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter/100))
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter ++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100)
    }
}, 10);