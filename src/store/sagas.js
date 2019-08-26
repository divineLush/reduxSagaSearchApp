import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';
import { GET_DATA, DATA_RECIEVED } from './actions';

export function* fetch(action) {
    const res = yield axios.get(`https://api.github.com/search/repositories?q=${ action.payload }`)
    yield put ({ type: DATA_RECIEVED, payload: res.data.items })
}

export function* watchFetchData() {
    yield takeEvery(GET_DATA, fetch)
}

export default function* rootSaga() {
    yield all([
        watchFetchData()
    ])
}