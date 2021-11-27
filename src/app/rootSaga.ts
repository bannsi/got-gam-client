import { all, fork } from 'redux-saga/effects';
import { watchCollection } from '../modules/make-collection/utils/collection.saga';
import { watchMyPage } from '../modules/myPage/utils/myPage.saga';
import { watchPiece } from '../modules/piece/utils/piece.saga';

export default function* rootSaga() {
  yield fork(watchPiece);
  yield fork(watchMyPage);
  yield fork(watchCollection);
}
