import { OperatorTableHeaderData } from './types';

const formatDefaultHeaderFieldName = (key: string): string => {
    const fieldName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
};

export const getDefaultOperatorTableHeaderName = (field: keyof OperatorTableHeaderData): string => {
    return formatDefaultHeaderFieldName(field);
};
