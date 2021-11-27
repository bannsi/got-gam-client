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
  address: string;
  addressDetail: string;
  content: string;
  date: string;
  peiceId: number;
  images: string[];
  user?: {
    nickname: string;
  };
  keywords: string[];
  latitude: number;
  longitude: number;
  placeUrl: string;
  createdAt?: string;
  whos: string[];
}

export interface Keyword {
  id: number;
  name: string;
}
export interface Who {
  id: number;
  who: string;
}
