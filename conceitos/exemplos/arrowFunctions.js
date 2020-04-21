const arr = [1, 3, 4, 5, 8, 9];

var arrow = arr.map(function(item){
    return item * 2;
});
console.log(arrow);

arrow = arr.map((item)=>{
    return item * 2;
});
console.log(arrow);

arrow = arr.map(item=>{
    return item * 2;
});
console.log(arrow);

arrow = arr.map(item => item * 2);
console.log(arrow);

const constante = () => ({nome: 'romulo'});
console.log(constante());