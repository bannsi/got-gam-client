import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { fetchKeywordsSuccess, fetchWhosSuccess, makePieceSuccess } from './piece.action';
import { Keyword, Piece, Who } from './piece.interface';

interface initialStateProps {
  keywords: Keyword[];
  whos: Who[];
  piece: Piece | null;
}

const initialState: initialStateProps = {
  keywords: [],
  whos: [],
  piece: null
};

const reducer = createReducer(initialState, {
  [makePieceSuccess.type]: (state, action: ReturnType<typeof makePieceSuccess>) => {
    state.piece = { ...action.payload };
  },
  [fetchWhosSuccess.type]: (state, action: ReturnType<typeof fetchWhosSuccess>) => {
    state.whos = [...action.payload];
  },
  [fetchKeywordsSuccess.type]: (state, action: ReturnType<typeof fetchKeywordsSuccess>) => {
    state.keywords = [...action.payload];
  }
});

export default reducer;

export const selectKeywords = (state: RootState) => state.piece.keywords;
export const selectWhos = (state: RootState) => state.piece.whos;
export const selectPiece = (state: RootState) => state.piece.piece;
