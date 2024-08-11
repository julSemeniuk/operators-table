import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Loader, SearchBox } from 'components/shared';
import { MIN_SEARCH_QUERY_LENGTH } from 'const';
import { useNotification, useOperators, useSearch } from 'hooks';
import { StyledContainer } from './styles';
import getOperatorsTableData from './utils';
import { OperatorsTable } from 'components';

const Operators: React.FC = () => {
    const { operators, operatorAddons, loading, error } = useOperators();
    const { searchValue, handleSearchChange } = useSearch();
    const { Notification } = useNotification({
        message: error,
    });

    const operatorsTableData = useMemo(() => {
        const operatorsTableData = getOperatorsTableData(operators, operatorAddons);
        if (searchValue.length >= MIN_SEARCH_QUERY_LENGTH) {
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
            ) : (
                <>
                    <SearchBox
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder={'User name... '}
                        aria-label="Search by user name"
                    />
                    <OperatorsTable operatorsTableData={operatorsTableData} />
                </>
            )}
            {Notification}
        </StyledContainer>
    );
};

export default Operators;
