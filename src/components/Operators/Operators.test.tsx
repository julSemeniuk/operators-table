import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Operators from './Operators';

import { Operator, OperatorAddon } from 'types';
import { useOperators, useSearch } from 'hooks';

jest.mock('hooks', () => ({
    useOperators: jest.fn(),
    useSearch: jest.fn(),
}));

const mockOperators: Operator[] = [
    { id: '1', name: 'Operator One', createdAt: '2024-01-01', isWorking: true, avatar: '' },
    { id: '2', name: 'Operator Two', createdAt: '2024-01-02', isWorking: true, avatar: '' },
];

const mockOperatorAddons: OperatorAddon[] = [
    { id: '1', fieldName: 'Addon One', text: 'Addon Text One', isChecked: true },
    { id: '2', fieldName: 'Addon Two', text: 'Addon Text Two', isChecked: false },
];

describe('Operators Component', () => {
    beforeEach(() => {
        (useOperators as jest.Mock).mockReturnValue({
            operators: mockOperators,
            operatorAddons: mockOperatorAddons,
            loading: false,
            error: null,
        });

        (useSearch as jest.Mock).mockReturnValue({
            searchValue: '',
            handleSearchChange: jest.fn(),
        });
    });

    it('should display all operators when search input is empty', () => {
        render(<Operators />);

        const operatorRows = screen.getAllByRole('row');

        expect(operatorRows).toHaveLength(mockOperators.length + 1);
    });

    it('should filter operators based on search value', () => {
        (useSearch as jest.Mock).mockReturnValue({
            searchValue: 'One',
            handleSearchChange: jest.fn(),
        });

        render(<Operators />);

        const operatorRows = screen.getAllByRole('row');

        expect(operatorRows).toHaveLength(2);
        expect(screen.getByText('Operator One')).toBeInTheDocument();
    });

    it('should display an error message if search does not match any operators name', () => {
        (useSearch as jest.Mock).mockReturnValue({
            searchValue: 'Non-existent',
            handleSearchChange: jest.fn(),
        });

        render(<Operators />);

        expect(screen.getByText(/no operator found/i)).toBeInTheDocument();

        const operatorRows = screen.queryAllByRole('row');

        expect(operatorRows).toHaveLength(0);
    });
});
