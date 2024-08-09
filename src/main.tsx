import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import store from './store';
import theme from './theme';

const rootElement = document.getElementById('root');

const initializeApp = (element: HTMLElement | null) => {
    if (element) {
        ReactDOM.createRoot(element).render(
            <React.StrictMode>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </Provider>
            </React.StrictMode>
        );
    } else {
        console.error('Root element not found');
    }
};

initializeApp(rootElement);
