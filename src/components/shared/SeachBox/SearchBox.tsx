import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox: React.FC<Props> = ({ value, onChange }) => {
    return (
        <TextField label="Search" placeholder="User name..." value={value} onChange={onChange} />
    );
};

export default SearchBox;
