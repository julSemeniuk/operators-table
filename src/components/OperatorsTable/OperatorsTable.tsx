import React, { useMemo, useState } from 'react';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { BlankStateMessage } from 'components/shared';
import { OPERATORS_TABLE_COLUMNS_MAP } from './OperatorTableData';
import { OperatorTableData } from './types';
import { StyledDataGrid, StyledDataGridContainer } from './styles';
import { Typography } from '@mui/material';

interface Props {
    operatorsTableData: OperatorTableData[];
}

const OperatorsTable: React.FC<Props> = ({ operatorsTableData }) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const columns = useMemo(
        () =>
            Object.values(OPERATORS_TABLE_COLUMNS_MAP).map((column: GridColDef) => ({
                ...column,
                renderHeader: () => (
                    <Typography variant="tableHeader">{column.headerName}</Typography>
                ),
            })),
        [operatorsTableData]
    );
    return (
        <StyledDataGridContainer>
            {operatorsTableData.length ? (
                <StyledDataGrid
                    aria-label="Operators table"
                    rows={operatorsTableData}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 20]}
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableColumnMenu
                    disableColumnSorting
                />
            ) : (
                <BlankStateMessage message={'No results found'} />
            )}
        </StyledDataGridContainer>
    );
};

export default React.memo(OperatorsTable);
