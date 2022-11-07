// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

const conta = []
let soma = 0;

function somatorio(n){
  
  for (let i = 0; i <= n; i++){
    conta.push(i);
  }
  
  for (let i = 0; i < conta.length; i++){
		soma += conta[i];
	}
}

somatorio(n);
console.log(soma)