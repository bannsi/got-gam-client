import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { Piece } from '../../piece/utils/piece.interface';
import {
  fetchMyCollectionStart,
  fetchMyCollectionSuccess,
  fetchMyInfoSuccess,
  fetchMyPieceSuccess
} from './myPage.action';
import { MyInfo, CollectionItemType } from './myPage.api';

interface initialStateProps {
  pieceList: Piece[];
  myInfo: MyInfo;
  collectionList: CollectionItemType[];
}

const initialState: initialStateProps = {
  pieceList: [],
  myInfo: {
    kakaoId: '',
    nickname: '',
    enabled: true,
    createdAt: ''
  },
  collectionList: []
};

const reducer = createReducer(initialState, {
  [fetchMyPieceSuccess.type]: (state, action: ReturnType<typeof fetchMyPieceSuccess>) => {
    state.pieceList = [...action.payload];
  },
  [fetchMyCollectionSuccess.type]: (state, action: ReturnType<typeof fetchMyCollectionSuccess>) => {
    state.collectionList = [...action.payload];
  },
  [fetchMyInfoSuccess.type]: (state, action: ReturnType<typeof fetchMyInfoSuccess>) => {
    state.myInfo = action.payload;
  }
});

export default reducer;

export const selectMyPieceList = (state: RootState) => state.myPage.pieceList;
export const selectMyCollectionList = (state: RootState) => state.myPage.collectionList;
export const selectPieceById = (state: RootState, id: number) =>
  state.myPage.pieceList.find((ele) => ele.peiceId === id);
export const selectCollectionById = (state: RootState, id: number) =>
  state.myPage.collectionList.find((ele) => ele.id === id);
