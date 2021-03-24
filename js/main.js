var nome = "Junior";
var lista = ["maça", "uva", "laranja"];
var fruta = {nome: "maça", cor:"vermelha"}; //dicionario - como se fosse um JSON
var frutas = [{nome: "maça", cor:"vermelha"}]; //array de dicionario - como se fosse um JSON
var idade = 18;
var count = 0;
var d = new Date();

alert(d);
console.log("Hora: " + d.getHours());

while(count<5){
    console.log(count);
    count++;
}


if(idade >= 18){
    alert(nome + " tem " + idade + " anos, é maior de idade!");    
}else{
    alert(nome + " tem " + idade + " anos, é menor de idade!");
}

function soma(n1, n2){
    return n1 + n2;
}

console.log("Total: " + soma(1,2));

console.log(nome);
console.log(lista);
lista.push("pera"); //acrescenta item no array
console.log(lista);
lista.pop(); //remove último item do array
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.toString()); //perde a referencia doa array e imprime o texto apenas
console.log(lista.join(" - ")); //transforma o array em string mas altera o separador
console.log(fruta);
console.log(fruta.nome);
console.log(frutas[0]);
