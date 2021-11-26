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
  peiceId: number;
  images: string[];
  date: string;
  content: string;
  latitude: number;
  longitude: number;
  address: string;
  addressDetail: string;
  keywords: string[];
  placeUrl: string;
  whos: string[];
  createdAt: string;
}

export interface Keyword {
  id: number;
  name: string;
}
export interface Who {
  id: number;
  who: string;
}
