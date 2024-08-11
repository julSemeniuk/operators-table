import { Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import theme from 'theme';

export const StyledDataGridContainer = styled('div')({
    height: '70vh',
    width: '100%',
});

export const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-cell': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .MuiTablePagination-selectLabel, & .MuiSelect-select': {
        fontSize: 12,
        color: theme.palette.secondary.main,
    },
    '& .MuiTablePagination-displayedRows': {
        fontSize: '12px',
    },
    '& .MuiDataGrid-scrollbar': {
        '&::-webkit-scrollbar': {
            width: 8,
            height: 8,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary.light,
            borderRadius: 4,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.grey[100],
        },
    },
});

export const StyledCheckbox = styled(Checkbox)({
    '&.MuiButtonBase-root.MuiCheckbox-root': {
        color: theme.palette.secondary.main,
    },
    '&.MuiButtonBase-root.MuiCheckbox-root.Mui-checked': {
        color: theme.palette.primary.main,
    },
});
