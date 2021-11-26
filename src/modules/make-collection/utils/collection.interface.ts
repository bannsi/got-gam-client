export interface NewCollection {
  title: string;
  items: Collection[];
}

export interface Collection {
  content: string;
  peiceId: number;
  date: string;
  orderNum: number;
}
