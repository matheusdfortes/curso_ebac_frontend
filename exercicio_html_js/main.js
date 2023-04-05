const form = document.getElementById('form-validacao')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
let formStatus = false;

function validandoForm(numeroA,numeroB){
    if(numeroA < numeroB){
        return true
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemPositiva = "Seu formulário está valido"
    const mensagemNegativa = "Seu formulário não está valido"
    const ContainerMensagem = document.getElementById('mensagem')
    if (validandoForm(campoA.value,campoB.value)){
        ContainerMensagem.innerHTML = mensagemPositiva
        ContainerMensagem.style.backgroundColor = 'green'
        ContainerMensagem.style.display = 'block'

    }else{
        ContainerMensagem.innerHTML = mensagemNegativa
        ContainerMensagem.style.backgroundColor = 'red'
        ContainerMensagem.style.display = 'block'
    }
})