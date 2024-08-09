import React, { useMemo, useState } from 'react';
import { DataGrid, GridPaginationModel } from '@mui/x-data-grid';
import { ErrorMessage } from 'components/shared';
import { OPERATORS_TABLE_COLUMNS_MAP } from './constants';
import { OperatorTableData } from './types';

interface Props {
    operatorsTableData: OperatorTableData[];
}

const OperatorsTable: React.FC<Props> = ({ operatorsTableData }) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const columns = useMemo(() => Object.values(OPERATORS_TABLE_COLUMNS_MAP), [operatorsTableData]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            {operatorsTableData.length ? (
                <DataGrid
                    rows={operatorsTableData}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 20]}
                />
            ) : (
                <ErrorMessage error={'No operator found'} />
            )}
        </div>
    );
};

export default React.memo(OperatorsTable);
