import { createAction } from '@reduxjs/toolkit';
import { Piece } from '../../piece/utils/piece.interface';

export const fetchMyPieceStart = createAction('myPage/fetchMyPieceStart', () => {
  return {
    payload: null
  };
});

export const fetchMyPieceSuccess = createAction('myPage/fetchMyPieceSuccess', (list: Piece[]) => {
  return {
    payload: list
  };
});
