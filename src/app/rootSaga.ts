import { all, fork } from 'redux-saga/effects';
import { watchMyPage } from '../modules/myPage/utils/myPage.saga';
import { watchPiece } from '../modules/piece/utils/piece.saga';

export default function* rootSaga() {
  yield fork(watchPiece);
  yield fork(watchMyPage);
}
