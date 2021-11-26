import { createAction } from '@reduxjs/toolkit';

import { Collection } from './collection.interface';

export const makeCollectionSuccess = createAction(
  'collection/makeCollectionSuccess',
  (returnedPiece: Collection) => {
    return {
      payload: returnedPiece
    };
  }
);
