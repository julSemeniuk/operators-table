import { Typography } from '@mui/material';
import theme from 'theme';
import { StyledContainer } from '../styles';

interface Props {
    error: string;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
    return (
        <StyledContainer>
            <Typography variant="error" color={theme.palette.primary.main}>
                Error:&nbsp;
            </Typography>
            <Typography variant="error">{error}</Typography>
        </StyledContainer>
    );
};

export default ErrorMessage;
