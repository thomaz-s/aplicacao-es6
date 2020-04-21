console.log("const e let");

const usuario = {nome:"romulo"}

usuario.nome = "augusto";

function teste(x){
    let y = 2;
    if (x > 5){
        let y = 4;
        console.log(y);
    }

    console.log(y);
}

teste(10);