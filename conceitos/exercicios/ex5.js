const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...x){
    return x.reduce((total, next)=> total+next);
}
console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   var usuario2 = {...usuario, nome: 'Gabriel'};
   var usuario3 = {...usuario, nome: 'Lontras'};

   console.log(usuario2, usuario3);