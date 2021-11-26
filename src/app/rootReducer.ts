import { combineReducers } from '@reduxjs/toolkit';
import pieceReducer from '../modules/piece/utils/piece.reducer';
import myPageReducer from '../modules/myPage/utils/myPage.reducer';
import makeCollectionReducer from '../modules/make-collection/utils/collection.reducer';

const rootReducer = combineReducers({
  piece: pieceReducer,
  myPage: myPageReducer,
  collection: makeCollectionReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
