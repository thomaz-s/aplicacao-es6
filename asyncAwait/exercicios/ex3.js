import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }catch(error){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('thomaz-s/java-challenges');
Github.getRepositories('rocketseat/dslkvmskv');