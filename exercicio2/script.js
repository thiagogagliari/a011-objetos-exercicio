const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log('O primeiro ator/atriz é:', filme.elenco[0]) // Impressão do ator/atriz 1
console.log('O último ator/atriz é:', filme.elenco[3]) // Impressão do Último ator/atriz
console.log('Nossa grade de transmissões de hoje:', filme.transmissoesHoje) // Transmissões
console.log('O filme no Canal Brasil será exibido às:', filme.transmissoesHoje[1].horario); // Horário do filme