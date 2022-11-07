var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

const conta = []

for (let i = 0; i <= N; i++){
		if(i % a === 0){
    	conta.push(i);
    }
}

let soma = 0;

for (let i = 0; i < conta.length; i++){
	soma += conta[i];
}

console.log(soma)