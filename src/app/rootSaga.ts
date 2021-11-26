import { all, fork } from 'redux-saga/effects';
import { watchPiece } from '../modules/piece/utils/piece.saga';

export default function* rootSaga() {
  yield fork(watchPiece);
}
