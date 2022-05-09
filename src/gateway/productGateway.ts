import axios from 'axios';
import { commentType, ICartProduct, IProduct } from '../../types';

export const baseProductsUrl: string =
  'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers';
export const baseCartUrl: string = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/tasks';
export const baseHistoryUrl: string = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/users';

export const getCart = async () => {
  const response = await fetch(baseCartUrl);
  const data = await response.json();
  return data;
};

export const addProductToCart = async (product: ICartProduct) => {
  const { name, image, price, id } = product;

  const cartProductData: ICartProduct = {
    id: Date.now().toString(),
    pageId: id,
    name,
    image,
    price,
  };

  return axios.post(baseCartUrl, cartProductData);
};

export const addProductToHistory = (product: ICartProduct): void => {
  axios.post(baseHistoryUrl, product);
};

export const deleteItem = (url: string, id: string): void => {
  axios.delete(`${url}/${id}`);
};

export const createProduct = (data: IProduct): void => {
  axios.post(baseProductsUrl, data);
};

export const putComment = async (id: string, data: object) => {
  const res = await axios.put(`${baseProductsUrl}/${id}`, data);
  return res.data;
};

export const getComments = async (id: string) => {
  const { data } = await axios.get(`${baseProductsUrl}/${id}`);
  return data.comments;
};
