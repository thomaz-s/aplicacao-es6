console.log("classes e herança");

class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = "romulo";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function(){
    minhaLista.add('Novo todo');
}

minhaLista.mostraUsuario();

class Matematica{
    static soma(a, b){
        return a+b;
    }
}

console.log(Matematica.soma(1, 2));