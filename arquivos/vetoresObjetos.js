/**/

const dev = {
    nome: "Carlos",
    idade: 32,
    tecnologias:[
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}.`)
            
