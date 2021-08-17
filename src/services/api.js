import axios from 'axios';
 const  api = axios.create({
     baseURL:'https://api.github.com/users'
 })
 export default api;

 //https://api.github.com/users/00raoni/repos