import { createAction } from '@reduxjs/toolkit';
import { CollectionItemType } from '../../myPage/utils/myPage.api';

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
  (collection: CollectionItemType) => {
    return {
      payload: collection
    };
  }
);
