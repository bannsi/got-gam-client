export interface NewCollection {
  title: string;
  startDate: string;
  endDate: string;
  coverImage: string;
  items: Collection[];
}

export interface Collection {
  content?: string;
  peiceId: number;
  date: string;
  orderNum: number;
}
export interface CreatedCollection {
  id: number;
  content: string;
  peiceId: number;
  orderNum: number;
  date: string;
}
