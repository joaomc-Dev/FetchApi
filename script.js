

function preencherDados(dados) {
    /*document.getElementById('usuario').innerHTML = dados.message;*/
    document.getElementById('foto').innerHTML = "<img class='foto' src='"+dados.message+"'>";

}



function pegarDadosTeste() {
    let nome = document.getElementById('usuario').value;
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => preencherDados(dados))
}

window.onload = function (dados) {
    
      pegarDadosTeste() 
        let nome = document.getElementById('usuario').value;
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(dados => preencherDados(dados))
    
    }
    