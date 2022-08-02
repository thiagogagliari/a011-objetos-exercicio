const pokemon1 = {
    nome: 'Bulbasaur',
    tipo: 'Grama',
    nível: 5
};

//a
const pokemon2 = {...pokemon1, nome: 'Squirtle', tipo: 'Água'}
// console.log(Pokemon2) // 

//b
pokemon1.ataques = []

// console.log(pokemon1)
// console.log(pokemon1.ataques)

pokemon1.ataques.push({
    nome: 'Investida',
    dano: 48, 
    tipo: 'Normal',
    precisao: 100});
    
console.log('Adicionando objetos com o push()', pokemon1)

//c
pokemon2.ataques=[...pokemon1.ataques]
console.log('Adicionando ataques ao segundo pokemon por spread', pokemon2)

//d
pokemon1.ataques.push({
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100})

console.log('Adicionando outros ataques ao primeiro pokemon', pokemon1)

pokemon2.ataques.push({
    nome: 'Jato de Água',
    dano: 40,
    precisao: 100,
    tipo: 'Água'})

console.log('Assim ficou meu primeiro pokemon:', pokemon1)
console.log('Assim ficou meu segundo pokemon:', pokemon2)

