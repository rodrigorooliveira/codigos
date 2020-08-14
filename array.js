let aprovados = Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Rodrigo'

console.log(aprovados[3])

aprovados.push('Daniel')
console.log(aprovados.length)
aprovados[9] = 'Rei'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort() // essa função vai ordenar o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Jose', 'Andreia', 'Maria']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)