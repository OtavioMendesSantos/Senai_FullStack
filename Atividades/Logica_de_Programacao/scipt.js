let qntEstoque

function quantidadeEstoque(){
    const inputqntEstoque = document.getElementById("qntEstoque")
    qntEstoque = Number(inputqntEstoque.value)
    if(qntEstoque <= 0){
        alert("Informe um número válido")
    }else{
        document.getElementById("formularioInicio").style.display = ("none")
        document.getElementById("formularioOperacao").style.display = ("block")
    }
}


function mostrarCompra() {
    document.getElementById("soma").style.display = ("block")
    document.getElementById("subtracao").style.display = ("none")
    console.log("Compra funcionou")
}

function mostrarVenda() {
    document.getElementById("soma").style.display = ("none")
    document.getElementById("subtracao").style.display = ("block")
    console.log("Venda funcionou")
}

function sair(){
    document.getElementById("soma").style.display = ("none")
    document.getElementById("subtracao").style.display = ("none")
    console.log("Sair funcionou")

}

function finalizaOperacao(){
    let valorSelecionado = document.querySelector('input[name="operacao"]:checked').value; //Não sei fazer isso muito bem
    if(valorSelecionado == 1){
        let x = Number(document.getElementById("compraEstoque").value)
        if(x <= 0){
            alert('Informe um valor válido.')
        }else{
            qntEstoque += x
            console.log(qntEstoque)
        }
    }else if(valorSelecionado == 2 ){
        let y = Number(document.getElementById("vendaEstoque").value)
        if(y > qntEstoque || y <= 0){
            alert('Informe um valor válido.')
        }else{
            qntEstoque -= y
            console.log(qntEstoque)
        }
    }else if(valorSelecionado == 3 ){
        document.getElementById("formularioResultado").style.display = "block"
        document.getElementById("formularioResultado").innerHTML = `O novo estoque é de ${qntEstoque} unidades`
    }else{
        console.log('Erro Inesperado')
    }
}
