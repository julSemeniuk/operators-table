import { GridColDef as MUIGridColDef } from '@mui/x-data-grid';
import { Operator, OperatorAddon } from 'types';

export type OperatorTableData = Operator & Pick<OperatorAddon, 'text'>;

export type OperatorTableHeaderData = Omit<OperatorTableData, 'avatar'>;

export type GridColDef = Omit<MUIGridColDef, 'field'> & {
    field: keyof OperatorTableData;
};

type OperatorsTableHeaderUINameValues =
    | '#'
    | 'User'
    | 'Is Working'
    | 'Date / Time of creation'
    | 'Description';

export type OperatorsTableHeaderNamesMap = {
    [key in keyof OperatorTableHeaderData]: OperatorsTableHeaderUINameValues;
};

export type OperatorsTableColumnsMap = {
    [key in keyof OperatorsTableHeaderNamesMap]: GridColDef;
};
