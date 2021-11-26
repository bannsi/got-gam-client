import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { makeCollectionSuccess } from './collection.action';
import { Collection } from './collection.interface';

interface initialStateProps {
  collection: Collection | null;
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