const arr = [1, 3, 4, 5, 8, 9];

const arrMap = arr.map(function(item, index){
    return item + index;
});

const arrReduce = arr.reduce(function(total, next){
    return total + next;
});

const arrFilter = arr.filter(function(item){
    return item % 2 === 0;
});

const arrFind = arr.find(function(item){
    return item === 20;
});