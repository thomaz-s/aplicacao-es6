import axios from 'axios';

class Api{
    static async getuserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.warn('erro na api');
        }
        
    }
}

Api.getuserInfo('thomaz-s');