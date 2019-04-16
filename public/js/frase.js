$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    mostraSpinner();
    $.get("http://localhost:3000/frases", trocaFrase)
        .fail(msgErro)
        .always(mostraSpinner);
}

function trocaFrase(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}


function buscaFrase() {
    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId};
    
    mostraSpinner();
    
    $.get("http://localhost:3000/frases",dados, trocaFraseEscolhida)
        .fail(msgErro)
        .always(mostraSpinner);
}

function trocaFraseEscolhida(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo)
}

function msgErro() {
    $("#erro").toggle();
    setInterval(
        function () {
            $("#erro").toggle();
        }, 5000);
}

function mostraSpinner() {
    $("#spinner").toggle();
}
