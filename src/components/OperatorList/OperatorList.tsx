import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '../../store';
import { getOperatorsRequest, getOperatorsAddonsRequest } from '../../slices/operatorSlice'; //todo: fix the abs path
import React from 'react';
import { TextField, Typography } from '@mui/material';

const OperatorList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { operators, operatorAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    useEffect(() => {
        dispatch(getOperatorsRequest());
        dispatch(getOperatorsAddonsRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <TextField label="Search" placeholder="User name..." />
            <div>
                <Typography variant="h1">Operators</Typography>
                <ul>
                    {operators.map((operator) => (
                        <li key={operator.id}>
                            <Typography variant="body2">{operator.name}</Typography>
                        </li>
                    ))}
                </ul>
                <h1>Operator Addons</h1>
                <ul>
                    {operatorAddons.map((addon) => (
                        <li key={addon.id}>{addon.text}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default OperatorList;
