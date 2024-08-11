import React from 'react';
import { Typography } from '@mui/material';
import { StyledContainer } from '../styles';

interface Props {
    message: string;
}

const BlankStateMessage: React.FC<Props> = ({ message }) => {
    return (
        <StyledContainer>
            <Typography variant="body1">{message}</Typography>
        </StyledContainer>
    );
};

export default BlankStateMessage;
