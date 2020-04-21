const user = {
    name: "Yuri", 
    transactions: [], 
    balance: 0
};

//função que Adicionar transações
function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type === "credit"){        
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
}

//função que retorna o maior valor de um tipo de transação
function getHigherTransactionByType(type){
    let higherValue = 0
    let higherTransaction

    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    
    return higherTransaction;    
}

//função que retorna o valor médio das transações
function getAverageTransactionValue(){
   let sum = 0

   for(let transaction of user.transactions){
       sum = sum + transaction.value
   }

   return sum / user.transactions.length
}

//função que retorna o número de transações de cada tipo
function getTransactionsCount (){
    let count = {
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions){
        if(transaction.type === 'credit'){
            count.credit ++
        }else{
            count.debit ++
        }
    }    
    return count
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }