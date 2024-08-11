import { Operator, OperatorAddon } from 'types';
import { getOperatorsTableData } from './utils';

describe('getOperatorsTableData', () => {
    const operators: Operator[] = [
        { id: '1', name: 'Operator One', createdAt: '01-01-2024', isWorking: true, avatar: '' },
        { id: '2', name: 'Operator Two', createdAt: '01-01-2024', isWorking: false, avatar: '' },
    ];

    const operatorsAddons: OperatorAddon[] = [
        { id: '1', fieldName: 'DynemicFieldNameOne', text: 'Addon Text One', isChecked: true },
        { id: '1', fieldName: 'DynemicFieldNameTwo', text: 'Addon Text Two', isChecked: false },
        { id: '3', fieldName: 'DynemicFieldNameThree', text: 'Addon Text Three', isChecked: false },
    ];

    it('should correctly map operator addons to their respective operators', () => {
        const result = getOperatorsTableData(operators, operatorsAddons);
        expect(result).toEqual([
            {
                id: '1',
                name: 'Operator One',
                createdAt: '01-01-2024',
                isWorking: true,
                avatar: '',
                DynemicFieldNameOne: 'Addon Text One',
                DynemicFieldNameTwo: 'Addon Text Two',
            },
            {
                id: '2',
                name: 'Operator Two',
                createdAt: '01-01-2024',
                isWorking: false,
                avatar: '',
            },
        ]);
    });

    it('should return an empty array when operators array is empty', () => {
        const result = getOperatorsTableData([], operatorsAddons);
        expect(result).toEqual([]);
    });

    it('should return operators without dynamic fields when operatorsAddons array is empty', () => {
        const result = getOperatorsTableData(operators, []);
        expect(result).toEqual([
            {
                id: '1',
                name: 'Operator One',
                createdAt: '01-01-2024',
                isWorking: true,
                avatar: '',
            },
            {
                id: '2',
                name: 'Operator Two',
                createdAt: '01-01-2024',
                isWorking: false,
                avatar: '',
            },
        ]);
    });

    it('should correctly handle operators with no matching addons', () => {
        const result = getOperatorsTableData(
            [
                {
                    id: '2',
                    name: 'Operator Three',
                    createdAt: '01-01-2024',
                    isWorking: true,
                    avatar: '',
                },
            ],
            operatorsAddons
        );
        expect(result).toEqual([
            {
                id: '2',
                name: 'Operator Three',
                createdAt: '01-01-2024',
                isWorking: true,
                avatar: '',
            },
        ]);
    });
});
