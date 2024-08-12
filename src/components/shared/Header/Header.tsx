import { Typography } from '@mui/material';
import React from 'react';
interface Props {
    header: string;
}

const Header: React.FC<Props> = ({ header }) => {
    return <Typography variant="h1">{header}</Typography>;
};

export default React.memo(Header);
