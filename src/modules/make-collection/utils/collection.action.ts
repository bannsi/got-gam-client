import { createAction } from '@reduxjs/toolkit';

import { Collection, CreatedCollection, NewCollection } from './collection.interface';

export const makeCollectionStart = createAction(
  'collection/makeCollectionStart',
  (collection: NewCollection) => {
    return {
      payload: collection
    };
  }
);
export const makeCollectionSuccess = createAction(
  'collection/makeCollectionSuccess',
  (collection: CreatedCollection) => {
    return {
      payload: collection
    };
  }
);
