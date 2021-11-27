import { createAction } from '@reduxjs/toolkit';
import { CreatedCollection } from '../../make-collection/utils/collection.interface';
import { Piece } from '../../piece/utils/piece.interface';
import { CollectionItemType, MyInfo } from './myPage.api';

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
export const fetchMyCollectionStart = createAction('myPage/fetchMyCollectionStart', () => {
  return {
    payload: null
  };
});

export const fetchMyCollectionSuccess = createAction(
  'myPage/fetchMyCollectionSuccess',
  (list: CollectionItemType[]) => {
    return {
      payload: list
    };
  }
);
export const fetchMyInfoStart = createAction('myPage/fetchMyInfoStart', () => {
  return {
    payload: null
  };
});

export const fetchMyInfoSuccess = createAction('myPage/fetchMyInfoSuccess', (info: MyInfo) => {
  return {
    payload: info
  };
});
