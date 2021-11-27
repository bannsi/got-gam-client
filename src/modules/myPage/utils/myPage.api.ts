import makeRequest from '../../../app/makeRequest';
import { Piece } from '../../piece/utils/piece.interface';

export const fetchMyPieceAPI = () =>
  makeRequest<PieceListResponse>({
    url: '/peices/v1',
    method: 'get'
  });
export const fetchMyCollectionAPI = (userId: string) =>
  makeRequest<CollectionListResponse>({
    url: `/collections/v1/user/${userId}`,
    method: 'get'
  });
export const fetchMyInfoAPI = () =>
  makeRequest<MyInfoResponse>({
    url: '/accounts/v1/me',
    method: 'get'
  });

interface PieceListResponse {
  message: string;
  body: Piece[];
}
interface CollectionListResponse {
  message: string;
  body: CollectionItemType[];
}

export interface CollectionItemType {
  id: number;
  title: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  items: PieceItem[];
}

export interface PieceItem {
  content: string;
  piece: Piece;
}

export interface MyInfoResponse {
  message: string;
  body: MyInfo;
}
export interface MyInfo {
  kakaoId: string;
  nickname: string;
  enabled: true;
  createdAt: string;
}
