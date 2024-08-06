import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { AppDispatch, RootState } from '../../store';
import { getOperatorsRequest, getOperatorsAddonsRequest } from '../../slices/operatorSlice'; //todo: fix the abs path
import React from 'react';
import { TextField, Typography } from '@mui/material';
import { StyledContainer } from './styles';

import { ErrorMessage, Loader } from '../shared';
import { OperatorsTable } from '..';
import getOperatorsTableData from './utils';

const Operators: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { operators, operatorAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    useEffect(() => {
        dispatch(getOperatorsRequest());
        dispatch(getOperatorsAddonsRequest());
    }, [dispatch]);

    const operatorsTableData = useMemo(
        () => getOperatorsTableData(operators, operatorAddons),
        [operators, operatorAddons]
    );

    return (
        <StyledContainer>
            <Typography variant="h1">Operators</Typography>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : (
                <div>
                    <TextField label="Search" placeholder="User name..." />
                    <OperatorsTable operatorsTableData={operatorsTableData} />
                </div>
            )}
        </StyledContainer>
    );
};

export default Operators;
