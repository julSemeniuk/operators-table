import React, { useMemo, useState } from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';
import { BlankStateMessage } from 'components/shared';
import { StyledDataGrid, StyledDataGridContainer } from './styles';
import { OperatorsTableData } from './types';
import { OperatorAddon } from 'types';
import { generateColumns } from './utils';

interface Props {
    operatorsTableData: OperatorsTableData[];
    operatorsAddons: OperatorAddon[];
}

const OperatorsTable: React.FC<Props> = ({ operatorsTableData, operatorsAddons }) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const columns = useMemo(() => generateColumns(operatorsAddons), [operatorsAddons]);

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
                />
            ) : (
                <BlankStateMessage message={'No results found'} />
            )}
        </StyledDataGridContainer>
    );
};

export default React.memo(OperatorsTable);
