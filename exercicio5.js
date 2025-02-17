function escopo() {
    const form = document.querySelector("#form")
    const pessoas = []

    function recebeEventoForm(e) {
        e.preventDefault()

        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#sobrenome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')
        const resultado = document.querySelector('.resultado')

        pessoas.push({nome:nome.value, sobrenome:sobrenome.value, peso:peso.value, altura:altura.value})
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)

}

escopo()

// form.onsubmit = function(e) {
//     e.preventDefault()
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault()
// })