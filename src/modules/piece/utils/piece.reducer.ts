import { createReducer } from '@reduxjs/toolkit';
import { fecthPieceStart, fetchPieceSuccess, makePieceSuccess } from './piece.action copy';

const initialState = {
  piece: {}
};

const reducer = createReducer(initialState, {
  [makePieceSuccess.type]: (state, action: ReturnType<typeof makePieceSuccess>) => {
    state.piece = { ...action.payload };
  }
});

export default reducer;
