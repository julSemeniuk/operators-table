//todo: add fonts

//todo: cover with integration and unit tests
//todo: deep self code review
//todo: add styles

import { Typography } from '@mui/material';
import { Loader, ErrorMessage, SearchBox } from 'components/shared';
import { MIN_SEARCH_QUERY_LENGTH } from 'constants';
import { useOperators, useSearch } from 'hooks';
import { useMemo } from 'react';
import { StyledContainer } from './styles';
import getOperatorsTableData from './utils';
import { OperatorsTable } from 'components';

const Operators: React.FC = () => {
    const { operators, operatorAddons, loading, error } = useOperators();
    const { searchValue, handleSearchChange } = useSearch();

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
            ) : error ? (
                <ErrorMessage error={error} />
            ) : (
                <>
                    <SearchBox value={searchValue} onChange={handleSearchChange} />
                    <OperatorsTable operatorsTableData={operatorsTableData} />
                </>
            )}
        </StyledContainer>
    );
};

export default Operators;
