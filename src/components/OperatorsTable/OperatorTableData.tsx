import React from 'react';
import { OperatorsTableHeaderNamesMap, OperatorsTableColumnsMap, OperatorTableData } from './types';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { UserCard } from 'components/shared';
import { Typography } from '@mui/material';
import { getDefaultOperatorTableHeaderName } from './utils';
import { formatIsoDateTime } from 'utils/helpers';
import { StyledCheckbox } from './styles';

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
        width: 40,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <Typography variant="body1">{params.value}</Typography>
        ),
    },
    name: {
        field: 'name',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['name'] ??
            getDefaultOperatorTableHeaderName('name'),
        width: 300,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <UserCard avatarUrl={params.row.avatar} name={params.row.name} />
        ),
    },
    isWorking: {
        field: 'isWorking',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['isWorking'] ??
            getDefaultOperatorTableHeaderName('isWorking'),
        width: 170,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <StyledCheckbox readOnly checked={params.value} aria-label="operator checkbox" />
        ),
    },
    createdAt: {
        field: 'createdAt',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['createdAt'] ??
            getDefaultOperatorTableHeaderName('createdAt'),
        width: 240,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <Typography variant="body2">{formatIsoDateTime(params.value)}</Typography>
        ),
    },
    text: {
        field: 'text',
        headerName:
            API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP['text'] ??
            getDefaultOperatorTableHeaderName('text'),
        width: 530,
        renderCell: (params: GridRenderCellParams<OperatorTableData>) => (
            <Typography variant="body2">{params.value}</Typography>
        ),
    },
};
