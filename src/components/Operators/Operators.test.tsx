import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Operators from './Operators';

import { Operator, OperatorAddon } from 'types';
import { useOperators, useSearch, useNotification } from 'hooks';

jest.mock('hooks', () => ({
    useOperators: jest.fn(),
    useSearch: jest.fn(),
    useNotification: jest.fn(),
}));

const mockOperators: Operator[] = [
    { id: '1', name: 'Operator One', createdAt: '2024-01-01', isWorking: true, avatar: '' },
    { id: '2', name: 'Operator Two', createdAt: '2024-01-02', isWorking: true, avatar: '' },
];

const mockOperatorsAddons: OperatorAddon[] = [
    { id: '1', fieldName: 'Addon One Dynemic Field', text: 'Addon Text One', isChecked: true },
    { id: '2', fieldName: 'Addon Two Dynemic Field', text: 'Addon Text Two', isChecked: false },
];

describe('Operators Component', () => {
    beforeEach(() => {
        (useOperators as jest.Mock).mockReturnValue({
            operators: mockOperators,
            operatorsAddons: mockOperatorsAddons,
            loading: false,
            error: null,
        });

        (useSearch as jest.Mock).mockReturnValue({
            searchValue: '',
            handleSearchChange: jest.fn(),
        });

        (useNotification as jest.Mock).mockReturnValue({
            Notification: null,
        });
    });

    it('should display all operators and dynamic columns when search input is empty', () => {
        render(<Operators />);

        const operatorRows = screen.getAllByRole('row');
        expect(operatorRows).toHaveLength(mockOperators.length + 1);

        expect(screen.getByText('Addon One Dynemic Field')).toBeInTheDocument();
        expect(screen.getByText('Addon Two Dynemic Field')).toBeInTheDocument();

        expect(screen.getByText('Operator One')).toBeInTheDocument();
        expect(screen.getByText('Addon Text One')).toBeInTheDocument();
        expect(screen.getByText('Operator Two')).toBeInTheDocument();
        expect(screen.getByText('Addon Text Two')).toBeInTheDocument();
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
        expect(screen.queryByText('Operator Two')).not.toBeInTheDocument();
    });

    it('should display a blank state message if search does not match any operator name', () => {
        (useSearch as jest.Mock).mockReturnValue({
            searchValue: 'non existent',
            handleSearchChange: jest.fn(),
        });

        render(<Operators />);

        const operatorRows = screen.queryAllByRole('row');
        expect(operatorRows).toHaveLength(0);

        expect(screen.queryByText('Operator One')).not.toBeInTheDocument();
        expect(screen.queryByText('Operator Two')).not.toBeInTheDocument();

        expect(screen.getByText('No results found')).toBeInTheDocument();
    });

    it('should render the Notification component when an error occurs', () => {
        (useOperators as jest.Mock).mockReturnValue({
            operators: [],
            operatorsAddons: [],
            loading: false,
            error: 'error message',
        });

        (useNotification as jest.Mock).mockReturnValue({
            Notification: <>Error Notification</>,
        });

        render(<Operators />);

        expect(screen.getByText('Error Notification')).toBeInTheDocument();
    });
});
