function Botao(){

    document.getElementById("Agradecimento");
    document.getElementById("Agradecimento").innerHTML = "Clicou";
    console.log(document.getElementById("Agradecimento"));

    //alert("Obrigado por clicar!");
}

function Redirecionar(){
    //window.open("http://www.google.com"); // abre em outra aba
    window.location.href = "http://www.google.com"; //abre na mesma aba
}

function Trocar(elemento){
    elemento.innerHTML = "Trocou";
}

function Voltar(elemento){
    elemento.innerHTML = "Obriado por clicar";
}

function Preenche(elemento){
    document.getElementById("texto").value = elemento.value;
}