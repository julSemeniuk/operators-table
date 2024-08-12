import React, { useMemo } from 'react';
import { Header, Loader, SearchBox } from 'components/shared';
import { MIN_SEARCH_QUERY_LENGTH } from 'const';
import { useNotification, useOperators, useSearch } from 'hooks';
import { StyledContainer } from './styles';
import { OperatorsTable } from 'components';
import { getOperatorsTableData } from './utils';

const Operators: React.FC = () => {
    const { operators, operatorsAddons, loading, error } = useOperators();
    const { searchValue, handleSearchChange } = useSearch();
    const { Notification } = useNotification({
        message: error,
    });
    const operatorsTableData = useMemo(() => {
        const operatorsTableData = getOperatorsTableData(operators, operatorsAddons);
        if (searchValue.length >= MIN_SEARCH_QUERY_LENGTH) {
            return operatorsTableData.filter((operator) =>
                operator.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        return operatorsTableData;
    }, [operators, operatorsAddons, searchValue]);

    return (
        <StyledContainer>
            <Header header={'Operators'} />
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
                    <OperatorsTable
                        operatorsTableData={operatorsTableData}
                        operatorsAddons={operatorsAddons}
                    />
                </>
            )}
            {Notification}
        </StyledContainer>
    );
};

export default Operators;
