import { combineReducers } from '@reduxjs/toolkit';
import pieceReducer from '../modules/piece/utils/piece.reducer';
import myPageReducer from '../modules/myPage/utils/myPage.reducer';

const rootReducer = combineReducers({ piece: pieceReducer, myPage: myPageReducer });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
