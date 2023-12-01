function irParaOutraPagina() {
    window.location.replace('/src/tela06/pagina06.html');
}

function retornar(){
    window.location.replace('/src/tela04/pagina04.html')
}

function skipPagina(){
    window.location.replace('/src/tela06/pagina06.html');
}

function atualizarContador() {
    var textarea = document.getElementById("detalhesPerca");
    var contador = document.getElementById("textareaRestante");
    var caracteresRestantes = 130 - textarea.value.length + ' caracteres restantes';

    contador.innerHTML = caracteresRestantes;
}