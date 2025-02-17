const form = document.querySelector("#form")
const nome = form.querySelector('#nome')
const sobrenome = form.querySelector('#sobrenome')
const peso = form.querySelector('#peso')
const altura = form.querySelector('#altura')
const resultado = document.querySelector('.resultado')

// form.onsubmit = function(e) {
//     e.preventDefault()
// }

form.addEventListener('submit', function(e){
    e.preventDefault()
})

function criaPessoa() {
    return {nome: nome, sobrenome: sobrenome, peso: peso, altura: altura}

}

console.log(nome)