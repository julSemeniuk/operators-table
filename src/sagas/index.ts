import { all } from 'redux-saga/effects';
import operatorSaga from './operatorSaga';

export default function* rootSaga() {
    yield all([operatorSaga()]);
}
