import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import OperatorsPage from './pages/OperatorsPage';
import { UniTalkRoute } from './constants';

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
