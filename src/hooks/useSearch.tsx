// import { ChangeEvent, useCallback } from 'react';
// import { OperatorTableData } from '../types';
// import { MIN_SEARCH_QUERY_LENGTH } from '../constants';

// const handleSearchChange = useCallback(
//     (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const value = e.target.value.trim();

//         let filteredOperators: OperatorTableData[];

//         if (value.length >= MIN_SEARCH_QUERY_LENGTH) {
//             return filteredOperators;
//         }

//         const filteredEmployees = employees.filter((employee) => {
//             const itemDataForSearch = dataForSearch
//                 .map((key) => employee[key as keyof IEmployeeTableData])
//                 .join(' ')
//                 .toLowerCase();
//             return itemDataForSearch.includes(inputValue.toLowerCase());
//         });

//         return filteredEmployees;

//         setEmployees(filteredEmployees);
//     },
//     [applyFilters, employees]
// );

// const debouncedHandleSearchBarChange = useMemo(
//     () => debounce(handleSearchBarChange),
//     [handleSearchBarChange]
// );
