import makeRequest from '../../../app/makeRequest';
import { Piece } from '../../piece/utils/piece.interface';

export const fetchMyPieceAPI = () =>
  makeRequest<PieceListResponse>({
    url: '/peices/v1',
    method: 'get'
  });

interface PieceListResponse {
  message: string;
  body: Piece[];
}
