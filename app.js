const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let saldo = 0

function menu(){
  console.log("\n1 - Depositar")
  console.log("2 - Sacar")
  console.log("3 - Consultar saldo")
  console.log("4 - Sair")

  rl.question("Escolha: ", (opcao)=>{
    if(opcao == "1"){
      rl.question("Valor depósito: ", (v)=>{
        let valor = parseFloat(v)
        if(valor > 0){
          saldo += valor
          console.log("Depósito feito!")
        }else{
          console.log("Valor inválido.")
        }
        menu()
      })
    }else if(opcao == "2"){
      rl.question("Valor saque: ", (v)=>{
        let valor = parseFloat(v)
        if(valor > 0 && valor <= saldo){
          saldo -= valor
          console.log("Saque realizado!")
        }else{
          console.log("Saldo insuficiente ou valor inválido.")
        }
        menu()
      })
    }else if(opcao == "3"){
      console.log("Saldo: R$ " + saldo.toFixed(2))
      menu()
    }else if(opcao == "4"){
      console.log("Saindo...")
      rl.close()
    }else{
      console.log("Opção inválida")
      menu()
    }
  })
}

menu()
