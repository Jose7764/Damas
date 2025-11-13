const casas = document.querySelectorAll(".casa");
const pretas = document.querySelector(".botao.preta");
const brancas = document.querySelector(".botao.branca");
const remover = document.querySelector(".botao.remover");

let tipoAtual = null;

let casaOrigem = null;



pretas.addEventListener("dragstart", () => {
    tipoAtual = "preta"
    casaOrigem = null
});
brancas.addEventListener("dragstart", () => {
    tipoAtual = "branca"
    casaOrigem = null
});

remover.addEventListener("dragstart", () => {
    tipoAtual = "remover"
    casaOrigem = null
});


casas.forEach(casas => {


casas.draggable = true;

casas.addEventListener("dragstart", (e) => {

    if(e.target.classList.contains("preta")){
        tipoAtual = "preta"
        casaOrigem = e.target
    }else if (e.target.classList.contains("branca")){
        tipoAtual = "branca"
        casaOrigem = e.target
    }else{
        tipoAtual = null
        casaOrigem = null
        e.preventDefault()
    }

    
});

casas.addEventListener("dragover", (e) => {
    e.preventDefault()
});

casas.addEventListener("drop", (e) => {
    e.preventDefault();

    const casaDestino = e.target

    if(tipoAtual == "remover"){
        casas.classList.remove("preta", "branca"); 
    }else if(tipoAtual == "preta" || tipoAtual == "branca"){
        casas.classList.remove("preta", "branca"); 
        casas.classList.add(tipoAtual);
    }

    if (casaOrigem && casaOrigem !== casaDestino) {
        casaOrigem.classList.remove("preta", "branca");
      }
    

   
    tipoAtual = null
    casaOrigem = null
    

    });
});