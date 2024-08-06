import React from 'react';
import { Container, Typography } from '@mui/material';
import OperatorList from '../components/OperatorList/OperatorList';

const OperatorsPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h1">Operators</Typography>
            <OperatorList />
        </Container>
    );
};

export default OperatorsPage;
