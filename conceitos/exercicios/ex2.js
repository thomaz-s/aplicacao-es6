const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(function(item){
    return item.idade;
});
console.log(idades);

const filtro = usuarios.filter(function(item){
    return (item.idade > 18 && item.empresa === "Rocketseat");
});
console.log(filtro);

const find = usuarios.find(function(item){
    return item.empresa === "Rocketseat";
});
console.log(find);

for (var u = 0; u < usuarios.length; u++){
    usuarios[u].idade *= 2;
}
console.log(usuarios);

const menor50 = usuarios.filter(function(item){
    return item.idade <= 50;
});
console.log(menor50);