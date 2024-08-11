import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operator, OperatorAddon } from 'types';

interface OperatorState {
    operators: Operator[];
    operatorsAddons: OperatorAddon[];
    loading: boolean;
    error: string | null;
}

const initialState: OperatorState = {
    operators: [],
    operatorsAddons: [],
    loading: false,
    error: null,
};

const operatorSlice = createSlice({
    name: 'operator',
    initialState,
    reducers: {
        getOperatorsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getOperatorsSuccess(state, action: PayloadAction<Operator[]>) {
            state.loading = false;
            state.operators = action.payload;
        },
        getOperatorsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        getOperatorsAddonsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getOperatorsAddonsSuccess(state, action: PayloadAction<OperatorAddon[]>) {
            state.loading = false;
            state.operatorsAddons = action.payload;
        },
        getOperatorsAddonsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getOperatorsRequest,
    getOperatorsSuccess,
    getOperatorsFailure,
    getOperatorsAddonsRequest,
    getOperatorsAddonsSuccess,
    getOperatorsAddonsFailure,
} = operatorSlice.actions;

export default operatorSlice.reducer;
