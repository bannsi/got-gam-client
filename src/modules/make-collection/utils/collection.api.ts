import { format } from 'prettier';
import makeRequest from '../../../app/makeRequest';
import { CreatedCollection, NewCollection } from './collection.interface';

export const makeCollectionsAPI = (newCollection: NewCollection) =>
  makeRequest<MakeCollectionResponse>({
    url: 'collections/v1/',
    method: 'post',
    body: {
      title: newCollection.title,
      startDate: newCollection.startDate,
      endDate: newCollection.endDate,
      coverImage: newCollection.coverImage,
      items: newCollection.items
    }
  });

interface MakeCollectionResponse {
  message: string;
  body: {
    collectionId: number;
    userId: string;
    title: string;
    coverImage: string | null;
    startDate: string | null;
    endDate: string | null;
    items: CreatedCollection[];
  };
}
