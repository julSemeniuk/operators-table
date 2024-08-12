import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { UniTalkRoute } from 'const';
import { StyledContainer } from './styles';
import { Header } from 'components/shared';

const Home: React.FC = () => {
    return (
        <StyledContainer role="main">
            <Header header={'Welcome to UniTalk Test Task'} />
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
