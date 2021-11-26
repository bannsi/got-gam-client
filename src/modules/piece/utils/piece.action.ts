import { createAction } from '@reduxjs/toolkit';
import { Keyword, Piece, Who } from './piece.interface';

export const fetchKeywordsStart = createAction('piece/fetchKeywordsStart', () => {
  return {
    payload: null
  };
});
export const fetchKeywordsSuccess = createAction(
  'piece/fetchKeywordsSuccess',
  (list: Keyword[]) => {
    return {
      payload: list
    };
  }
);
export const fetchWhosStart = createAction('piece/fetchWhosStart', () => {
  return {
    payload: null
  };
});
export const fetchWhosSuccess = createAction('piece/fetchWhosSuccess', (list: Who[]) => {
  return {
    payload: list
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
