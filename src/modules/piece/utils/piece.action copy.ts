import { createAction } from '@reduxjs/toolkit';
import { newPiece, Piece } from './piece.interface';

export const fecthPieceStart = createAction('piece/fetchPieceStart', () => {
  return { payload: {} };
});

export const fetchPieceSuccess = createAction('piece/fetchPieceSuccess', () => {
  return { payload: {} };
});

export const makePieceStart = createAction('makePiece/makePieceStart', (newPiece: newPiece) => {
  return {
    payload: newPiece
  };
});

export const makePieceSuccess = createAction(
  'makePiece/makePieceSuccess',
  (returnedPiece: Piece) => {
    return {
      payload: returnedPiece
    };
  }
);
