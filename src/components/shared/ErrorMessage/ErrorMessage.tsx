import { Typography } from '@mui/material';
import { StyledContainer } from '../styles';
import theme from '../../../theme';

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
