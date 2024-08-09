import React from 'react';
import { StyledTextField } from './styles';
import { InputAdornment, TextFieldProps, Typography } from '@mui/material';

interface SearchBoxProps extends Omit<TextFieldProps, 'variant'> {
    width?: number;
    label?: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
    width = 300,
    label = 'Search',
    placeholder,
    value,
    onChange,
    ...rest
}) => {
    return (
        <StyledTextField
            {...rest}
            focused
            width={width}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            InputLabelProps={<Typography variant="inputLabel">{label}</Typography>}
        />
    );
};

export default SearchBox;
