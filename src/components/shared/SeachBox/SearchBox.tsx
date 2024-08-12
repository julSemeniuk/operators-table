import React from 'react';
import { StyledTextField } from './styles';
import { TextFieldProps, Typography } from '@mui/material';

interface SearchBoxProps extends Omit<TextFieldProps, 'variant'> {
    width?: number;
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
            width={width}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            InputLabelProps={{
                children: <Typography variant="inputLabel">{label}</Typography>,
            }}
            {...rest}
        />
    );
};

export default React.memo(SearchBox);
