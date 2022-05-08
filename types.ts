export type commentType = {
  id: string;
  author: string;
  comment: string;
  date: number;
};

export interface ICartProduct {
  id?: string;
  name: string;
  image: string;
  price: number;
  pageId?: string;
}

export interface IProduct extends ICartProduct {
  description: string;
  platforms: string;
  release?: number;
  publisher: string;
  genre: string;
  voice?: string;
  screen?: string;
  legalInfo: string;
  images?: string;
  comments?: commentType[];
}

export interface IHistoryProduct extends ICartProduct {
  amount: number;
  pageId?: string;
}

export type StoreKeysType = {
  commentsList: object;
};

export type navigationItemType = {
  id: string;
  title: string;
  path: string;
};
