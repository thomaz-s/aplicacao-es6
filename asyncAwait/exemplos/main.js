const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('ok')}, 2000);
});

async function executaPromisse (){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

const executaPromisse2 = async ()=>{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromisse();
executaPromisse2();