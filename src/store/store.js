import axios from "axios";
import { makeAutoObservable } from 'mobx';
import AuthenticationService from '../services/AuthenticationService';
import ProfileService from '../services/ProfileService';
import UserService from '../services/UserService';
import { GLOBAL_API_URL, LOCAL_API_URL } from '../utils/consts';
export default class Store{
    user = {}
    isAuth = false;
    isLoading = false;
    error= {};
    userEmail = '';
    userId = '';
    userInformation = {}
    profiles = {}
    users = {}


    constructor(){
        makeAutoObservable(this);
        this.isActivated = false;
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setIsLoading(bool){
        this.isLoading = bool;
    }

    setUser(user){
        this.user = user;
    }
    setActivated(isActivated){
        this.isActivated = isActivated;
    }

    setError(error){
        this.error = error; 
    }
    
    setUserId(userId){
        this.userId = userId;
    }

    setUserEmail(userEmail){
        this.userEmail = userEmail;
    }

    setUserInformation(userInformation){
        this.userInformation = userInformation;
    }

    setProfiles(profiles){
        this.profiles = profiles;
    }
    setUsers(users){
        this.users = users;
    }
    async login(email, password){
        try{
            const response = await AuthenticationService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setActivated(response.data.user.isActivated)
        }
        catch(e){
            this.setError(e)
            console.log(e)
        }
    }
    async registration(email, password){
        try{
            const response = await AuthenticationService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch(e){
            this.setError(e)
        }
    }
    async logout(){
        try{
            await AuthenticationService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        }
        catch(e){
            console.log (e)
        }
    }
    async checkAuth(){
        this.setIsLoading(true)
        try{
            const response = await axios.get(`${LOCAL_API_URL || GLOBAL_API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setActivated(response.data.user.isActivated);
            this.setUserEmail(response.data.user.email);
            this.setUserId(response.data.user.id);
        }
        catch(e){
            console.log(e)
        }
        finally{
            this.setIsLoading(false)
        }
    }
    async getProfile(userId){
        try{
            const response = await ProfileService.getProfile(userId);
            return response;
        }catch(e){
            console.log(e);
        }
    }
    async updateProfile(profileData) {
        try {
            const formData = new FormData();
    
            // Добавляем только непустые поля в formData
            for (const key in profileData) {
                if (profileData[key] !== '' && profileData[key] !== null && profileData[key] !== undefined) {
                    if (key === 'technologies' && Array.isArray(profileData[key])) {
                        profileData[key].forEach((technology, index) => {
                            formData.append(`technologies[${index}]`, technology);
                        });
                    } else if (key !== 'technologies' && key !== 'photo') {
                        formData.append(key, profileData[key]);
                    }
                }
            }
    
            if (profileData.photo) {
                formData.append('photo', profileData.photo);
            }
            const response = await ProfileService.updateProfile(formData);

            return response.data;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error; 
        }
    }
    
    async getAllProfiles(){
        try{
            const response = await ProfileService.getAllProfiles();
            return response;
        }catch(e){
            console.log(e)
        }
    }
    
    async getAllUsers(){
        try{    
            const response = await UserService.getAllUsers();
            return response;
        }catch(e){
            console.log(e);
        }
    }
    async getTechnologiesList(){
        try{
            const res = await ProfileService.getTechnologiesList();
            return res;
        }catch(e) {
            console.log(e)
        }
    }
}
