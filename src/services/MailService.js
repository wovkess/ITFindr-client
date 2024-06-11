import axios from "axios"
import { GLOBAL_API_URL } from "../utils/consts";

export default class MailService{
    static async sendMail(from, to, subject, text){
        try{
            const res = await axios.post(`${GLOBAL_API_URL}/send-mail`, {from, to, subject, text});
            return res.data;
        }catch(e){
            throw new Error(e);
        }
        
    }
}