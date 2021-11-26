import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { Piece } from '../../piece/utils/piece.interface';
import { fetchMyPieceSuccess } from './myPage.action';

interface initialStateProps {
  pieceList: Piece[];
}

const initialState: initialStateProps = {
  pieceList: []
};

const reducer = createReducer(initialState, {
  [fetchMyPieceSuccess.type]: (state, action: ReturnType<typeof fetchMyPieceSuccess>) => {
    state.pieceList = [...action.payload];
  }
});

export default reducer;

export const selectMyPieceList = (state: RootState) => state.myPage.pieceList;
export const selectPieceById = (state: RootState, id: number) =>
  state.myPage.pieceList.find((ele) => ele.peiceId === id);
