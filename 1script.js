// ARRAY: uma lista que armazena vários valores.
// Cada item abaixo é um OBJETO, criado com chaves { }.
const students = [
    // Cada objeto possui as propriedades name e textGrand.
    { name: 'jordan', textGrand: 10 },
    { name: 'jymmy', textGrand: 9 },
    { name: 'jaber', textGrand: 8 },
    { name: 'farias', textGrand: 7 },
    { name: 'moraes', textGrand: 6 },
    { name: 'lins', textGrand: 5 }
]

// map() percorre todos os alunos e cria um NOVO array.
// A função entre parênteses é executada uma vez para cada student.
const aprovados = students.map(student => {
    // const cria uma variável que não será reatribuída.
    // O objeto novo mantém o nome e converte a nota em uma situação.
    const neuwstudent = { name: student.name, textGrand: student.textGrand >= 4 ? 'Aprovado' : 'Reprovado' }

    // return devolve o objeto criado para o map().
    return neuwstudent
});

// console.log() mostra o valor no terminal ou no console do navegador.
console.log(aprovados)

// Carrinho com produtos. Cada produto tem nome, preço por quilo e quantidade.
const cart = [
    { produtName: 'abobora', pricePerkg: 5, quantity: 1 },
    { produtName: 'pepino', pricePerkg: 3.55, quantity: 1 },
    { produtName: 'limao', pricePerkg: 1.2, quantity: 1 },
    { produtName: 'abacate', pricePerkg: 5.4, quantity: 1 },
    { produtName: 'morango', pricePerkg: 11.9, quantity: 1 },
]

// reduce() transforma vários itens em um único resultado.
// accumulator guarda o total parcial; product é o item atual.
const sum = cart.reduce((accumulator, product) => {
    // Multiplica preço pela quantidade e adiciona ao total acumulado.
    return accumulator + (product.pricePerkg * product.quantity)
}, 0) // O 0 é o valor inicial do accumulator.

console.log(sum)

// let permite declarar uma variável cujo valor pode ser alterado depois.
// Aqui companies é um array de objetos com dados de empresas.
let companies = [
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }
]

// Arrow function: (company) => é uma forma curta de declarar uma função.
const add10Percentute = (company) => {
    // ...company copia todas as propriedades do objeto original.
    // A propriedade marketValue é substituída pelo novo valor.
    return { ...company, marketValue: company.marketValue * 0.9 }
}

// Retorna true somente para empresas fundadas depois de 1980.
// Essa função será usada como regra do filter().
const filterCompanies = (company) => company.foundedOn > 1980

// Soma o valor de mercado de cada empresa recebida.
const calculateMarketValue = (accumulator, company) => {
    return accumulator + company.marketValue
}

// Encadeamento de métodos: o resultado de cada método vai para o próximo.
const newCompanies = companies
    // Reduz cada valor de mercado em 10% (multiplica por 0.9).
    .map(add10Percentute)
    // Mantém somente empresas fundadas depois de 1980.
    .filter(filterCompanies)
    // Soma os valores filtrados; 0 é o valor inicial do acumulador.
    .reduce(calculateMarketValue, 0)

// Exibe o valor final calculado.
console.log(newCompanies)