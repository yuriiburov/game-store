import axios from 'axios';
import { ICartProduct, IHistoryProduct, IProduct } from '../../types';

export const baseProductsUrl: string =
  'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers';
export const baseCartUrl: string = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/tasks';
export const baseHistoryUrl: string = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/users';

export const getCart = async () => {
  const response = await fetch(baseCartUrl);
  const data = await response.json();
  return data;
};

export const addProductToCart = (product: ICartProduct): void => {
  const { name, image, price, id } = product;

  const cartProductData: ICartProduct = {
    id: Date.now().toString(),
    pageId: id,
    name,
    image,
    price,
  };

  axios.post(baseCartUrl, cartProductData);
};

export const deleteFromCart = (id: string) => {
  axios.delete(`${baseCartUrl}/${id}`);
};

export const addProductToHistory = (product: ICartProduct): void => {
  axios.post(baseHistoryUrl, product);
};

export const deleteFromHistory = (id: string) => {
  axios.delete(`${baseHistoryUrl}/${id}`);
};

export const deleteItem = (url: string, id: string): void => {
  axios.delete(`${url}/${id}`);
};

export const createProduct = (data: IProduct) => {
  axios.post(baseProductsUrl, data);
};
