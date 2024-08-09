import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UniTalkRoute } from './constants';
import { HomePage, OperatorsPage } from 'pages';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={UniTalkRoute.Operators} element={<OperatorsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
