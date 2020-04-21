//DESAFIO 1

const dev = [
    { nome: 'Carlos', tecnologias: ["HTML","CSS"]},
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(let i = 0; i < dev.length; i++){
    console.log(`${dev[i].nome} trabalha com ${dev[i].tecnologias}`)
}