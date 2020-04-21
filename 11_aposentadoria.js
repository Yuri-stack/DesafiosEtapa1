
//DESAFIO 2

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

const contribuicaoIdade = contribuicao + idade;
let homemAposentar = false;
let mulherAposentar = false;

// const  homemPodeAposentar  =  sexo  ==  'M'  &&  contribuição >= 35  &&  calculoContribuicao > = 95
// const  mulherPodeAposentar  =  sexo  ==  'F'  &&  contribuição > = 30  &&  calculoContribuicao > = 85

if(sexo == 'M' && contribuicao >= 35 && contribuicaoIdade >= 95){
    homemAposentar = true;
}else{
    if(sexo == 'F' && contribuicao >= 30 && contribuicaoIdade >= 85){
        mulherAposentar = true;
    }
}

if(homemAposentar || mulherAposentar){
    console.log(`${nome}, você pode se aposentar! `)
}else{
    console.log(`${nome}, você não pode se aposentar! `)
}



