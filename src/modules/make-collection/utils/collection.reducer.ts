import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { CollectionItemType } from '../../myPage/utils/myPage.api';
import { makeCollectionSuccess } from './collection.action';

interface initialStateProps {
  collection: CollectionItemType | null;
}

const initialState: initialStateProps = {
  collection: null
};

const reducer = createReducer(initialState, {
  [makeCollectionSuccess.type]: (state, action: ReturnType<typeof makeCollectionSuccess>) => {
    state.collection = { ...action.payload };
  }
});

export default reducer;

export const selectCollection = (state: RootState) => state.collection.collection;
