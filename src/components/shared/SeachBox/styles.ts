import { TextField, styled } from '@mui/material';
import theme from 'theme';

interface StyledTextFieldProps {
    width?: number;
}

export const StyledTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'width',
})<StyledTextFieldProps>(({ width }) => ({
    width: width,
    '& .MuiFormLabel-root, & .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: theme.palette.secondary.main,
        },
    },
    '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text,
        '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            border: '1px solid lightGrey',
        },
    },
}));
