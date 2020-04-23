import api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');
        this.formEl = document.getElementById('repo-form');
        
        this.registerhandlers();
    }

    registerhandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();
        const repoInput = this.inputEl.value;
        
        if (repoInput.length === 0) return;
        this.setLoading();
        try{
            const response = await api.get(`/${repoInput}`);

            const {name, description, owner: {avatar_url}, html_url} = response.data;
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.inputEl.value = '';

            this.render();
        }catch (erro){
            alert(`O repositório ${repoInput} não existe`);
        }
        this.setLoading(false);

    }

    setLoading(loading = true){
        if (loading === true){
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Carregando...'));
            loadEl.setAttribute('id', 'loading');
            this.formEl.appendChild(loadEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();