import { call, put, takeLatest } from 'redux-saga/effects';
import { getOperators, getOperatorsAddons } from 'services';

import {
    getOperatorsSuccess,
    getOperatorsFailure,
    getOperatorsAddonsSuccess,
    getOperatorsAddonsFailure,
    getOperatorsRequest,
    getOperatorsAddonsRequest,
} from 'slices/operatorSlice';

function* handleGetOperators() {
    try {
        const { data } = yield call(getOperators);
        yield put(getOperatorsSuccess(data));
    } catch (error: any) {
        yield put(getOperatorsFailure(error.message));
    }
}

function* handleGetOperatorsAddons() {
    try {
        const { data } = yield call(getOperatorsAddons);
        yield put(getOperatorsAddonsSuccess(data));
    } catch (error: any) {
        yield put(getOperatorsAddonsFailure(error.message));
    }
}

export default function* operatorSaga() {
    yield takeLatest(getOperatorsRequest.type, handleGetOperators);
    yield takeLatest(getOperatorsAddonsRequest.type, handleGetOperatorsAddons);
}
