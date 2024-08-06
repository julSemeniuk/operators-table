import { Operator, OperatorAddon, OperatorTableData } from '../../types';

const getOperatorsTableData = (
    operators: Operator[],
    operatorAddons: OperatorAddon[]
): OperatorTableData[] => {
    const operatorDescriptionBasedOnId: Record<string, string> = {};
    operatorAddons.forEach((operatorAddon) => {
        operatorDescriptionBasedOnId[operatorAddon.id] = operatorAddon.text;
    });

    return operators.map((operator) => ({
        ...operator,
        description: operatorDescriptionBasedOnId[operator.id] || '',
    }));
};

export default getOperatorsTableData;
