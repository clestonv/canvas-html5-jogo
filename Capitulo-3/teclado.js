// Codigo de teclas - aqui vão todos os que forem necessarios
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var ESPACO = 32;

function Teclado(elemento) {
    this.elemento = elemento;

    // Array de teclas pressionadas
    this.pressionadas = [];

    // Array de teclas disparadas
    this.disparadas = [];

    // Funcoes de disparo
    this.funcoesDisparo = [];

    // Registrando o estado das teclas no array
    var teclado = this;
    elemento.addEventListener('keydown', function(evento) {
        var tecla = evento.keyCode;  // Tornando mais legivel
        teclado.pressionadas[evento.keyCode] = true;

        // Disparar somente se for o primeiro keydown da tecla
        if (teclado.funcoesDisparo[tecla] && ! teclado.disparadas[tecla]) {
            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla] () ;
        }
    });
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla) {
        return this.pressionadas[tecla];
    },
    disparou: function(tecla, callback) {
        this.funcoesDisparo[tecla] = callback; 
    }
}