import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
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
    console.error('Root element not found'); //todo: ...
}
