import axios from "axios";
import { GLOBAL_API_URL } from "../utils/consts";

export default class ProfileService{
    static async getProfile(userId){
        const response = await axios.post(`${GLOBAL_API_URL}/getProfile`, { userId });
        return response.data;
    }
    static async getAllProfiles(){
        const response = await axios.get(`${GLOBAL_API_URL}/getAllProfiles`);
        return response.data
    }
    static async getTechnologiesList(){
        const response = await axios.get(`${GLOBAL_API_URL}/getTechnologiesList`);
        return response.data
    }
    static async updateProfile(formData){
        try {
            const response = await axios.post(`${GLOBAL_API_URL}/updateProfile`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    }
}