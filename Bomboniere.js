import readline from "readline-sync";

let estoque = parseInt(readline.question("Informe a quantidade inicial de doces em estoque: "));

while(true){
    console.log("\n1 - Chegada de Doces (Entrada)");
    console.log("2 - Vendas de Doces (Saida)");

    let operacao = parseInt(readline.question("Informe o tipo de operacao a realizar: "));
    if(operacao !== 1 && operacao !== 2){
        console.log("Operacao invalida! Tente novamente");
        continue
    }

    let quantidade = parseInt(readline.question("Informe a quantidade de doces: "));
    if(isNaN(quantidade) || quantidade <= 0){
        console.log("Quantidade digitada é invalida! Tente novamente");
        continue;
    }

    if(operacao === 1){
        estoque += quantidade;
    }else{
        if(quantidade > estoque){
            console.log("Estoque insuficiente");
        }else{
            estoque -= quantidade;
        }
    }

    console.log("Estoque atualizado : " + estoque + "doces");
    console.log(`Estoque atualizado: $(estoque) doces`);

    let continuar = readline.question("Deseja continuar? (s/n)").toLowerCase();

    if(continuar !== "s"){
        console.log("Sistema encerrado!");
        break;
    }
}