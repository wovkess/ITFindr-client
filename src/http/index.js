import axios from 'axios';
import { GLOBAL_API_URL } from '../utils/consts';

// Создаем экземпляр axios с базовыми настройками
const $api = axios.create({
    baseURL: GLOBAL_API_URL,
    withCredentials: true, // Включает отправку куки во все запросы
});

// Добавляем интерсептор запросов для добавления токена в заголовки
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Добавляем интерсептор ответов для обработки ошибок
$api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${GLOBAL_API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            console.log('New Access Token:', response.data.accessToken);

            // Устанавливаем новый токен в заголовки оригинального запроса
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

            // Повторяем оригинальный запрос с новым токеном
            return $api(originalRequest);
        } catch (e) {
            console.log('User not authorized');
        }
    }
    return Promise.reject(error);
});

export default $api;
