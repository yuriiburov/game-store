export type commentType = {
  id: string;
  author: string;
  comment: string;
  date: string;
  time: string;
};

export interface ICartProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface IProduct extends ICartProduct {
  description: string;
  platforms: string;
  release: string;
  publisher: string;
  genre: string;
  voice?: string;
  screen?: string;
  legalInfo: string;
  images: string;
  comments: commentType[];
}

export interface IHistoryProduct extends ICartProduct {
  amount: number;
}

export type navigationItem = {
  id: string;
  title: string;
  path: string;
};
