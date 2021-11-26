import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  fecthPieceStart,
  fetchPieceSuccess,
  makePieceStart,
  makePieceSuccess
} from './piece.action copy';
import { makePieceAPI } from './piece.api';

function* fetchPieceSaga(action: ReturnType<typeof fecthPieceStart>) {
  try {
    // yield call();
  } catch (error) {
    console.log(error);
  }
}

function* makePieceSaga(action: ReturnType<typeof makePieceStart>) {
  try {
    const newPiece = action.payload;
    const returnedPiece = yield call(makePieceAPI, newPiece);
    yield put(makePieceSuccess(returnedPiece));
  } catch (error) {
    console.log(error);
  }
}
export function* watchPiece() {
  yield all([
    takeLatest(fecthPieceStart.type, fetchPieceSaga),
    takeEvery(makePieceStart.type, makePieceSaga)
  ]);
}
