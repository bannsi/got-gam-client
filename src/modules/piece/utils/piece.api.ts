import makeRequest from '../../../app/makeRequest';
import { newPiece, Piece } from './piece.interface';

// export const fetchPieceAPI = () => makeRequest<>({});
export const makePieceAPI = (newPiece: newPiece) =>
  makeRequest<Piece>({
    url: 'piece/v1/',
    method: 'post',
    body: {
      images: newPiece.images,
      date: newPiece.date,
      content: newPiece.content,
      latitude: newPiece.latitude,
      longitude: newPiece.longitude,
      address: newPiece.address,
      addressDetail: newPiece.addressDetail,
      keywords: newPiece.keywords,
      placeUrl: newPiece.placeUrl,
      whos: newPiece.whos
    }
  });
