import makeRequest from '../../../app/makeRequest';
import { Keyword, newPiece, Piece, Who } from './piece.interface';

// export const fetchPieceAPI = () => makeRequest<>({});
export const makePieceAPI = (newPiece: newPiece) =>
  makeRequest<Piece>({
    url: 'peices/v1/',
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

export const fetchKeywordsAPI = () =>
  makeRequest<KeywordResponse>({
    url: '/peices/v1/keyword/',
    method: 'get'
  });
export const fetchWhosAPI = () =>
  makeRequest<WhoResponse>({
    url: '/peices/v1/who/',
    method: 'get'
  });

interface KeywordResponse {
  message: string;
  body: Keyword[];
}
interface WhoResponse {
  message: string;
  body: Who[];
}
