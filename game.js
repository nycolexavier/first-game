// add vars 
// chamando o quadrado do html
let quadrado = document.querySelector('#quadrado');
// chamando o personagem do html
let personagem = document.querySelector("#personagem");

function pular () {
    if (quadrado.classList != 'animar') {
        quadrado.classList.add('animar')
    }

    setTimeout(function(){
        quadrado.classList.remove('animar')
    }, 600)
}

var testarColisao = setInterval(function(){
    var topoQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('top')
    )
    var EsquerdaPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('left')
    )


    if(EsquerdaPersonagem < 20 && EsquerdaPersonagem > 0 && topoQuadrado >= 130) {
        personagem.style.animation = 'none'
        personagem.style.display = 'none'
        alert('Você perdeu!')
    }
},10)