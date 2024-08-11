import { GridColDef, GridColDef as MUIGridColDef } from '@mui/x-data-grid';
import { Operator, OperatorAddon } from 'types';

type OperatorsTableDynamicFields = {
    [K in OperatorAddon['fieldName']]: string;
};

type OperatorFieldNames = keyof Omit<Operator, 'avatar'>;

type OperatorsTableHeaderUINameValues = '#' | 'User' | 'Is Working' | 'Date / Time of creation';

export type OperatorsTableStaticFields = Omit<Operator, 'avatar'>;

export type OperatorsTableData = OperatorsTableStaticFields & OperatorsTableDynamicFields;

export type OperatorsTableHeaderNamesMap = {
    [key in OperatorFieldNames]: OperatorsTableHeaderUINameValues;
};
