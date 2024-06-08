import { ChakraProvider } from '@chakra-ui/react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from './store/store';
const store = new Store();
export const Context = createContext({
    store,
});
createRoot(document.getElementById('root')).render(

    <Context.Provider value={{ store }}>
        <ChakraProvider>
            <App />
        </ChakraProvider> 
    </Context.Provider>

);

reportWebVitals();
