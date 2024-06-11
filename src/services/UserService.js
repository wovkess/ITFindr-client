import axios from 'axios';
import { GLOBAL_API_URL } from "../utils/consts";
export default class UserService{
    static async getAllUsers(){
        const response = await axios.get(`${GLOBAL_API_URL}/getAllUsers`)
        return response.data;
    }
} 