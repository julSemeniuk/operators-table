import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UniTalkRoute } from 'const';
import { StyledContainer } from './styles';

const Home: React.FC = () => {
    return (
        <StyledContainer role="main">
            <Typography variant="h1">Welcome to UniTalk Test Task</Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={UniTalkRoute.Operators}
                aria-label="Go to Operators Page"
            >
                Go to Operators Page
            </Button>
        </StyledContainer>
    );
};

export default Home;
