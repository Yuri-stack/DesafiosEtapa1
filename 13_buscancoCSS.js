// DESAFIO 2

const dev = [
    { nome: 'Carlos', tecnologias: ["HTML","CSS"]},
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario){
    for(let tec of usuario.tecnologias){
        if(tec == "CSS"){
            return true      
        }
    }

    return false
        
}

for(let i = 0; i < dev.length; i++){
    const usuarioComCSS = checaSeUsuarioUsaCSS(dev[i])

    if(usuarioComCSS){
        console.log(`O desenvolvedor ${dev[i].nome} trabalha com CSS.`)
    }
}