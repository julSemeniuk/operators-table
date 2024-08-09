import { OperatorTableData } from 'components/OperatorsTable/types';
import { Operator, OperatorAddon } from 'types';

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
        text: operatorDescriptionBasedOnId[operator.id] || '',
    }));
};

export default getOperatorsTableData;
