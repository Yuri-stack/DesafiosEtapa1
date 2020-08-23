// //Desafio 01

// const dev = [
//     {
//         nome:"Carlos",
//         tecnologias: ["HTML","CSS"]
//     },
//     {
//         nome:"Jasmine",
//         tecnologias: ["JavaScript","CSS"]
//     },
//     {
//         nome:"Tuane",
//         tecnologias: ["HTML","Node.js"]
//     }
// ]

// for(let i = 0; i < dev.length; i++){
//     console.log(`${dev[i].nome} trabalha com ${dev[i].tecnologias}`)
// }

// //Desafio 02

// const dev = [
//     {nome:"Carlos", tecnologias: ["HTML","CSS"]},
//     {nome:"Jasmine",tecnologias: ["JavaScript","CSS"]},
//     {nome:"Tuane", tecnologias: ["HTML","Node.js"]}
// ]

// function checaSeUsuarioUsaCSS(user){
//     for(let tech of user.tecnologias){
//         if(tech === "CSS"){
//             return true
//         }
//     }
//     return false
// }

// for(let i = 0; i < dev.length; i++){
//     const usuarioUsaCSS = checaSeUsuarioUsaCSS(dev[i]);

//     if(usuarioUsaCSS){
//         console.log(`O usuário ${dev[i].nome} trabalha com CSS.`)
//     }
// }

//Desafio 03

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function somaNumeros(numeros){
    let soma = 0;

    // for(let numero of numeros){
    //     soma = soma + numero
    // }   

    for(let i = 0; i < numeros.length; i++){
      soma = soma + numeros[i]
    }

    return soma
}

function calculaSaldo(receitas, despesas){
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    const saldo = somaReceitas - somaDespesas

    return saldo
}

for(let i = 0; i < usuarios.length; i++){
    const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)

    if(saldo > 0){
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else{
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}
