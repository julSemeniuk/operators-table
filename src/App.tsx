import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UniTalkRoute } from './constants';
import { WelcomePage, OperatorsPage } from 'pages';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path={UniTalkRoute.Operators} element={<OperatorsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
