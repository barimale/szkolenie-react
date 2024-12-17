import axios from 'axios';
 
// Tworzenie instancji Axiosa
const apiClient = axios.create({
    baseURL: 'https://crm-app-akademia108-bf1127afa289.herokuapp.com/', // Adres podstawowy API
    timeout: 10000, // Maksymalny czas oczekiwania na odpowiedź
});
 
// Dodanie interceptora żądań
apiClient.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('user') || 'null')?.jwt; // Pobieranie tokena z localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Dodanie tokena do nagłówka
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Obsługa błędów żądań
    }
);
 
// Obsługa odpowiedzi (opcjonalna)
apiClient.interceptors.response.use(
    (response) => response, // Jeśli odpowiedź jest poprawna, zwróć ją
    (error) => {
        // Obsługa błędów odpowiedzi (np. odświeżanie tokena, wylogowanie użytkownika)
        if (error.response?.status === 401) {
            // Przykład: Wylogowanie użytkownika przy błędzie 401
            console.error('Sesja wygasła. Zaloguj się ponownie.');
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
 
export default apiClient;