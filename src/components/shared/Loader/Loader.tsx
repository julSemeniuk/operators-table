import { CircularProgress } from '@mui/material';
import { StyledContainer } from '../styles';

const Loader = () => {
    return (
        <StyledContainer>
            <CircularProgress color="secondary" />
        </StyledContainer>
    );
};

export default Loader;
