// console.log
// console.log("hello world")
// console.log("teste")

// variáveis
// let nome = "João"
// console.log(nome, " nasceu em 1984.")
// const nome2 = "Maria"
// console.log(nome2, " nasceu em 1985.")

// operaçõs aritméticas
// console.log(1+1)
// console.log(1-1)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)
// console.log(1++)
// console.log(1--)

// alert, confirm, prompt
// alert("teste")
// let confirma = confirm("teste")
// prompt("teste")

// strings
// let umaString = "Um texto"
// console.log(umaString[4])
// console.log(umaString.charAt(6))
// console.log(umaString.indexOf('texto'))
// console.log(umaString.match(/[a-z]/g))
// console.log(umaString.replace('Um', 'Outra'))

// numbers
// let num1 = 10.548459
// console.log(num1.toFixed(2))

// Math
// let num1 = 10.238923
// console.log(Math.floor(num1)) // Arredondar para baixo
// console.log(Math.ceil(num1)) // Arredondar para cima
// console.log(Math.round(num1)) // Arredonda para o mais próximo
// console.log(Math.max(1, 2, 3, 4, 5)) // Encontra o maior número
// console.log(Math.min(1, 2, 3, 4, 5)) // Encontra o menor número
// console.log(Math.random()) // Gera um número aleatório entre 0 e 1
// console.log(Math.random() * (10 - 5) + 5) // Gera um número aleatório entre 10 e 5
// console.log(Math.PI) // Mostra o número de PI
// console.log(25 ** 0.5) // Raiz quadrada

// Arrays
// array = [1, 2, 3, 4, "string", null, true]
// console.log(array[1])
// array[0] = "outro"
// console.log(array[0])
// array[7] = "mais um"
// array.push('adiciona no fim')
// array.unshift('adiciona no começo')
// console.log(array)

// Const mutável
// const array = [1, 2, 3, 4]
// array.pop()
// console.log(array)
// array[0] = 13
// console.log(array)
// array.unshift(99)
// console.log(array)

// Funções
// function saudacao(nome) {
//     console.log(`Hello World ${nome}!`)
// }
// saudacao('Mateus')
// saudacao('Maria')
// saudacao('João')
// function soma(x, y) {
//     resultado = x + y
//     return resultado
// }
// console.log(soma(2, 2))
// console.log(soma(5, 5))
// console.log(soma(3, 3))
// const raiz = (n) => n ** 0.5;
// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

// Objetos
// const pessoa = {
//     nome: 'Mateus',
//     idade: 24
// }
// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }
// const pessoa1 = criaPessoa('Mateus', 'Costa', 24)
// const pessoa2 = criaPessoa('Esther', 'Kumitake', 19)
// console.log(pessoa1)
// console.log(pessoa2)
// const pessoa = {
//     nome: 'Mateus',
//     fala() {
//         console.log(`${this.nome} está falando!`)
//     }
// };
// pessoa.fala()