import React from 'react';
import { Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { OperatorAddon } from 'types';
import { convertCamelToTitleCase, formatIsoDateTime } from 'utils/helpers';
import { StyledCheckbox } from './styles';
import { OperatorsTableData, OperatorsTableStaticFields } from './types';
import { UserCard } from 'components/shared';
import { API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP } from './const';

const createStaticColumn = (
    field: keyof OperatorsTableStaticFields,
    headerName: string,
    renderCell: (params: GridRenderCellParams<OperatorsTableData>) => JSX.Element,
    width: number,
    type: 'number' | 'string' = 'string'
): GridColDef => ({
    field,
    headerName,
    width,
    type,
    renderCell,
    renderHeader: () => <Typography variant="tableHeader">{headerName}</Typography>,
});

const getDefaultOperatorTableHeaderName = (field: keyof OperatorsTableStaticFields): string => {
    return convertCamelToTitleCase(field);
};

const generateStaticColumns = (headerColumnsMap: Record<string, string>): GridColDef[] => {
    return Object.keys(headerColumnsMap).map((key) => {
        const field = key as keyof OperatorsTableStaticFields;
        const headerName = headerColumnsMap[key] ?? getDefaultOperatorTableHeaderName(field);

        switch (field) {
            case 'id':
                return createStaticColumn(
                    field,
                    headerName,
                    (params) => <Typography variant="body1">{params.value}</Typography>,
                    70,
                    'number'
                );
            case 'name':
                return createStaticColumn(
                    field,
                    headerName,
                    (params) => <UserCard avatarUrl={params.row.avatar} name={params.row.name} />,
                    300
                );
            case 'isWorking':
                return createStaticColumn(
                    field,
                    headerName,
                    (params) => (
                        <StyledCheckbox
                            readOnly
                            checked={params.value}
                            aria-label="operator checkbox"
                        />
                    ),
                    170
                );
            case 'createdAt':
                return createStaticColumn(
                    field,
                    headerName,
                    (params) => (
                        <Typography variant="body2">{formatIsoDateTime(params.value)}</Typography>
                    ),
                    240
                );
            default:
                return createStaticColumn(
                    field,
                    headerName,
                    (params) => <Typography variant="body1">{params.value}</Typography>,
                    200
                );
        }
    });
};

const generateDynamicColumns = (operatorsAddons: OperatorAddon[]): GridColDef[] => {
    const uniqueFields = new Set<string>();

    operatorsAddons.forEach((operatorAddon) => {
        uniqueFields.add(operatorAddon.fieldName);
    });

    return Array.from(uniqueFields).map((fieldName) => ({
        field: fieldName,
        headerName: fieldName,
        width: 200,
        renderCell: (params: any) => <Typography variant="body2">{params.value}</Typography>,
        renderHeader: () => <Typography variant="tableHeader">{fieldName}</Typography>,
    }));
};

export const generateColumns = (operatorsAddons: OperatorAddon[]): GridColDef[] => {
    const staticColumns = generateStaticColumns(API_TO_UI_OPERATORS_TABLE_HEADER_NAME_MAP);
    const dynamicColumns = generateDynamicColumns(operatorsAddons);

    return [...staticColumns, ...dynamicColumns];
};
