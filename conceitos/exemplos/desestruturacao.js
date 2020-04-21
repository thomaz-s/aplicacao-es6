const usuario = {
    nome: 'romulo',
    idade: 20,
    endereco: {
        cidade: 'sobral',
        estado: 'CE'
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(cidade)
console.log(idade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);