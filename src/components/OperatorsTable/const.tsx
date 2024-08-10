import React from 'react';
import { OperatorsTableHeaderNamesMap, OperatorsTableColumnsMap, OperatorTableData } from './types';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { UserCard } from 'components/shared';
import { Checkbox } from '@mui/material';
import { getDefaultOperatorTableHeaderName } from './utils';
import { formatIsoDateTime } from 'utils/helpers';

const API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP: OperatorsTableHeaderNamesMap = {
    id: '#',
    name: 'User',
    isWorking: 'Is Working',
    createdAt: 'Date / Time of creation',
    text: 'Description',
};

export const OPERATORS_TABLE_COLUMNS_MAP: OperatorsTableColumnsMap = {
    id: {
        field: 'id',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['id'] ??
            getDefaultOperatorTableHeaderName('id'),
        width: 90,
    },
    name: {
        field: 'name',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['name'] ??
            getDefaultOperatorTableHeaderName('name'),
        width: 200,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <UserCard avatarUrl={params.row.avatar} name={params.row.name} />
        ),
    },
    isWorking: {
        field: 'isWorking',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['isWorking'] ??
            getDefaultOperatorTableHeaderName('isWorking'),
        width: 130,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <Checkbox readOnly checked={params.value} aria-label="operator checkbox" />
        ),
    },
    createdAt: {
        field: 'createdAt',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['createdAt'] ??
            getDefaultOperatorTableHeaderName('createdAt'),
        width: 160,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) =>
            formatIsoDateTime(params.value),
    },
    text: {
        field: 'text',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['text'] ??
            getDefaultOperatorTableHeaderName('text'),
        width: 400,
    },
};
