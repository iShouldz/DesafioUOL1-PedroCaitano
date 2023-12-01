function irParaOutraPagina() {
    window.location.replace('/src/tela01/home.html');
}

function pegarCadastroURL() {
    var parametros = {};
    var url = window.location.search.substring(1);
    var pares = url.split('&');

    for (var i = 0; i < pares.length; i++) {
        var par = pares[i].split('=');
        parametros[par[0]] = decodeURIComponent(par[1]);
    }
    return parametros;
}

function exibirNomeCadastro() {
    var parametros = pegarCadastroURL();
    var nome = parametros.name

    document.getElementById('nomeCadastro').textContent = 'Recebemos seu cadastro, ' + nome + '!';
}