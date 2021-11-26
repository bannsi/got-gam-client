import { format } from 'prettier';
import makeRequest from '../../../app/makeRequest';
import { Collection, NewCollection } from './collection.interface';
// export const fetchPieceAPI = () => makeRequest<>({});
export const makeCollectionsAPI = (newCollection: NewCollection) =>
  makeRequest<NewCollection>({
    url: 'collections/v1/',
    method: 'post',
    body: {}
  });
