import { Operator, OperatorAddon } from 'types';
import getOperatorsTableData from './utils';

describe('getOperatorsTableData', () => {
    const operators: Operator[] = [
        { id: '1', name: 'Operator One', createdAt: '2024-01-01', isWorking: true, avatar: '' },
        { id: '2', name: 'Operator Two', createdAt: '2024-01-02', isWorking: false, avatar: '' },
    ];

    const operatorAddons: OperatorAddon[] = [
        { id: '1', fieldName: 'Field Name One', text: 'Addon Text One', isChecked: true },
        { id: '3', fieldName: 'Field NameThree', text: 'Addon Text Three', isChecked: false },
    ];

    it('should map operator text correctly from operatorAddons', () => {
        const result = getOperatorsTableData(operators, operatorAddons);
        expect(result).toEqual([
            {
                id: '1',
                name: 'Operator One',
                createdAt: '2024-01-01',
                isWorking: true,
                avatar: '',
                text: 'Addon Text One',
            },
            {
                id: '2',
                name: 'Operator Two',
                createdAt: '2024-01-02',
                isWorking: false,
                avatar: '',
                text: '',
            },
        ]);
    });

    it('should return empty array when operators array is empty', () => {
        const result = getOperatorsTableData([], operatorAddons);
        expect(result).toEqual([]);
    });

    it('should return operators with empty text when operatorAddons array is empty', () => {
        const result = getOperatorsTableData(operators, []);
        expect(result).toEqual([
            {
                id: '1',
                name: 'Operator One',
                createdAt: '2024-01-01',
                isWorking: true,
                avatar: '',
                text: '',
            },
            {
                id: '2',
                name: 'Operator Two',
                createdAt: '2024-01-02',
                isWorking: false,
                avatar: '',
                text: '',
            },
        ]);
    });
});
