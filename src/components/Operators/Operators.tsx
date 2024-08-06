import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';

import { AppDispatch, RootState } from '../../store';
import { getOperatorsRequest, getOperatorsAddonsRequest } from '../../slices/operatorSlice'; //todo: fix the abs path
import React from 'react';
import { Typography } from '@mui/material';
import { StyledContainer } from './styles';

import { ErrorMessage, Loader } from '../shared';
import { OperatorsTable } from '..';
import getOperatorsTableData from './utils';
import SearchBox from '../shared/SeachBox/SearchBox';

const Operators: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { operators, operatorAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    useEffect(() => {
        dispatch(getOperatorsRequest());
        dispatch(getOperatorsAddonsRequest());
    }, [dispatch]);

    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const operatorsTableData = useMemo(() => {
        const operatorsTableData = getOperatorsTableData(operators, operatorAddons);
        if (searchValue) {
            return operatorsTableData.filter((operator) =>
                operator.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        return operatorsTableData;
    }, [operators, operatorAddons, searchValue]);

    return (
        <StyledContainer>
            <Typography variant="h1">Operators</Typography>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : (
                <div>
                    <SearchBox value={searchValue} onChange={handleSearchChange} />
                    <OperatorsTable operatorsTableData={operatorsTableData} />
                </div>
            )}
        </StyledContainer>
    );
};

export default Operators;
