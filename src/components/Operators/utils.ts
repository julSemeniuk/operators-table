import { OperatorsTableData } from 'components/OperatorsTable/types';
import { Operator, OperatorAddon } from 'types';

export const getOperatorsTableData = (
    operators: Operator[],
    operatorsAddons: OperatorAddon[]
): OperatorsTableData[] => {
    const operatorsAddonsMap: Record<string, Record<string, string>> = {};

    operatorsAddons.forEach((operatorAddon) => {
        if (!operatorsAddonsMap[operatorAddon.id]) {
            operatorsAddonsMap[operatorAddon.id] = {};
        }
        operatorsAddonsMap[operatorAddon.id][operatorAddon.fieldName] = operatorAddon.text;
    });

    return operators.map((operator) => ({
        ...operator,
        ...operatorsAddonsMap[operator.id],
    })) as unknown as OperatorsTableData[];
};
