import { combineReducers } from '@reduxjs/toolkit';
import pieceReducer from '../modules/piece/utils/piece.reducer';

const rootReducer = combineReducers({ piece: pieceReducer });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
