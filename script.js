const mensagem = document.getElementById('mensagem') // Atribui o paragrafo com id 'mensagem' a variavel mensagem.
function validarNumero(){
    let numero = document.getElementById('numero').value // Atribui o campo com id 'numero' a variavel numero.
    if(numero === ""){ // Caso o campo esteja vazio:
        mensagem.textContent = "Por favor, insira um número" // Usa o textContent para mudar a mensagem exibida no site.
        mensagem.style.color = "red" // muda a cor do paragrafo.
    } else { // Se o campo estiver preenchido
        numero = parseFloat(numero)
        if(numero > 10){
            mensagem.textContent = "O número é maior que 10."
            mensagem.style.color = "green"
        } else if(numero > 5) {
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10."
            mensagem.style.color = "orange"
        } else {
            mensagem.textContent = "O número é 5 ou menor."
            mensagem.style.color = "blue"
        }
    }
}