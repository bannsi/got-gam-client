export interface newPiece {
  images: File[];
  date: string;
  content: string;
  latitude: number;
  longitude: number;
  address: string;
  addressDetail: string;
  keywords: string[];
  placeUrl: string;
  whos: string[];
}

export interface Piece {
  id: string;
  images: File[];
  date: string;
  content: string;
  latitude: number;
  longitude: number;
  address: string;
  addressDetail: string;
  keywords: string[];
  placeUrl: string;
  whos: string[];
}
